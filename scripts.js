// Copyright (c) 2018 Matic Balantič
// Licensed under the MIT license.

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){return setTimeout(f, 1000/60)}; // simulate calling code 60
window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(requestID){clearTimeout(requestID)}; //fall back

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

const _validateOptions = Symbol('validateOptions');
const _init = Symbol('init');
const _isIEorEdge = Symbol('isIEorEdge');
const _createRootSVG = Symbol('createRootSVG');
const _initSlider = Symbol("addSliderToRootSVG");
const _createSliderCircle = Symbol('createSliderCircle');
const _createEmptyCircle = Symbol('createEmptyCircle');
const _createClickCircle = Symbol('createClickCircle');
const _createCircle = Symbol('createSlider');
const _createHandle = Symbol('createHandle');
const _deg2Step = Symbol('deg2Step');
const _step2Rad = Symbol('step2Rad');
const _val2Step = Symbol('_val2Step');
const _deg2Val = Symbol('deg2Val');
const _point2Radians = Symbol('point2Radians');
const _setStepFallback = Symbol('setStepFallback');
const _move = Symbol('move');
const _canMove = Symbol('cantMove');
const _updateState = Symbol("updateState");
const _cancelDrag = Symbol('cancelDrag');
const _startDrag = Symbol('startDrag');
const _handleDrag = Symbol('handleDrag');
const _handleSliderClick = Symbol('handleSlideClick');
const _initEventHandlers = Symbol('initEventHandlers');
const _touchHandler = Symbol('touchHandler');
const _calculateNewPosition = Symbol('calculateNewPoint');
const _transformClientToLocalCoordinate = Symbol('transformClientToLocalCoordinate');

const STROKE_WIDTH = 20;
const HANDLER_RADIUS = (STROKE_WIDTH / 2) + 6;
const TOLERANCE = 40;



class CircularSlider {
    constructor(id, options) {
        this.options = options;
        this.id = id;

        this[_validateOptions]();
        this[_init]();
    }

    /**
     * Returns the current value which can only be a number divisible by step.
     *
     * @returns {number}
     */
    get currentValue() {

        return this.options.min + (this.currentStepNo * this.options.step)
    }

    /**
     * Sets slider value based on the provided step number. We don't allow setting the value directly since
     * it can only be set to numbers divisible by step (this.options.step).
     *
     * @param stepNo
     */
    set stepNo(stepNo) {
        const maxSteps = (this.options.max - this.options.min) / this.options.step;
        if (isNaN(parseFloat(stepNo)) || stepNo < 0 || stepNo > maxSteps) {
            throw new Error("Step number " + stepNo + " is not between 0 and " + maxSteps);
        }

        if (this.isIEorEdge) {
            this[_setStepFallback](stepNo);
        } else {
            const radiansEnd = this[_step2Rad](stepNo);
            const newPosition = this[_calculateNewPosition](radiansEnd);

            this.slider.style.transition = "stroke-dashoffset 0.5s ease-in-out";
            this.handle.style.transition = "all 0.5s ease-in-out";

            requestAnimationFrame(() => {
                this.slider.setAttributeNS(null, 'stroke-dashoffset', `${this.circumference - newPosition.path}`);
                this.handle.style.transform = "rotate(" + newPosition.degrees + "deg)";
                this[_updateState](newPosition, stepNo);
            });
        }
    }

    /**
     * Used for Edge/IE because of it doesn't support SVG animation via CSS. :/
     * Animates slider by setting stroke-dashoffset and transform properties in a requestAnimationFrame loop.
     *
     * @param stepNo
     */
    [_setStepFallback](stepNo) {
        //stop current animation if in progress
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        // calculate start/end points
        const radiansStart = this.position.radians;
        const radiansEnd = this[_step2Rad](stepNo);
        const isIncreasing = radiansStart < radiansEnd;
        let radiansMove = radiansStart;

        const animate = () => {
            // add easing if we are close to end of the step
            radiansMove += (Math.abs(radiansEnd - radiansMove) <= 0.2) ? (isIncreasing ? 0.01 : -0.01) : (isIncreasing ? 0.05 : -0.05);

            this[_move](radiansMove);

            // allow for a small error because of the rounding
            if ((Math.abs(radiansMove - radiansEnd) > 0.01)) {
                this.animationFrameId = requestAnimationFrame(animate);
            } else {
                this.animationFrameId = null; // animation ended
            }
        };

        this.animationFrameId = requestAnimationFrame(animate);
    }

    /**
     * Moves slider on the orbit for the given coordinates.
     *
     * @param angelRadians
     */
    [_move](angelRadians) {

        const newPosition = this[_calculateNewPosition](angelRadians);
        if (!this[_canMove](newPosition)) {
            return;
        }

        const nextStep = this[_deg2Step](newPosition.degrees);
        this[_updateState](newPosition, nextStep);

        if (this.isIEorEdge) {
            const transform = 'rotate(' + newPosition.degrees + ')';

            this.handle.setAttributeNS(null, 'transform', transform);
            this.slider.setAttributeNS(null, 'stroke-dashoffset', `${this.circumference - newPosition.path}`);
        } else {
            this.slider.style.transition = "";
            this.handle.style.transition = "";

            requestAnimationFrame(() => {
                this.slider.setAttributeNS(null, 'stroke-dashoffset', `${this.circumference - newPosition.path}`);
                this.handle.style.transform = "rotate(" + newPosition.degrees + "deg)";
            });
        }
    }

    /**
     * Returns false if slider wants to be moved past the top zero point.
     *
     * @param newPosition
     * @returns {boolean}
     */
    [_canMove](newPosition) {
        return !(this.position.y < 0 && ((this.position.x >= 0 && newPosition.x < 0) || (this.position.x < 0 && newPosition.x >= 0)));
    }

    /**
     * Calculates new position, angles and path traveled based on local coordinate system (center = 0,0).
     *
     * @param angleRadians
     * @returns {{x: number, y: number, degrees: number, radians: number, path: number}}
     */
    [_calculateNewPosition](angleRadians) {
        const newX = Math.round(Math.sin(angleRadians) * this.radius);
        const newY = Math.round(Math.cos(angleRadians) * this.radius) * -1;

        // we have our coordinates right, but angles need to be adjusted to positive number
        // basically just add 2PI - 360 degrees
        const radians360 = angleRadians < 0 ? angleRadians + 2 * Math.PI : angleRadians;
        const angelDegrees = radians360 * 180.0 / Math.PI;
        const path = Math.round(this.radius * radians360);

        return {
            x: Math.floor(angelDegrees) === 359 ? -1 : newX,
            y: newY,
            degrees: angelDegrees,
            radians: radians360,
            path: path
        };
    }

    [_updateState](newPosition, nextStep) {
        // notify about value change
        if (this.currentStepNo !== nextStep && (this.options.valueChange && typeof(this.options.valueChange) === 'function')) {
            this.currentStepNo = nextStep; // set step here so we send the latest value

            this.options.valueChange(this.currentValue, this.options.eventType);
            this.options.eventType = '';
        }

        // update slider internal state
        this.value = this[_deg2Val](newPosition.degrees);
        this.currentStepNo = nextStep;
        this.position = newPosition;
    }

    [_validateOptions]() {
        const step = this.options.step;
        const min = this.options.min;
        const max = this.options.max;

        if (min > max) {
            throw new Error("Min " + min + " must be smaller than max " + max + "!");
        }

        if (max % step !== 0 || min % step !== 0) {
            throw new Error("Min " + min + " and max " + max + " + must be divisible by step " + step + "!");
        }

        if (this.options.radius > 200 || this.options.radius < 0) {
            throw new Error("Radius must be between 1 and 200. The slider will adjust the to the size of the container automatically. Radius 200 means slider will be touching the boundaries");
        }
    }

    /**
     * Initializes (calculates values of) all properties and creates a slider.
     */
    [_init]() {
        this.isIEorEdge = this[_isIEorEdge](); // cache the result since we'll be checking it very often
        this.centerX = 0;
        this.centerY = 0;
        this.radius = this.options.radius - (STROKE_WIDTH / 2); // subtract border width from radius
        this.circumference = this.options.radius * 2 * Math.PI;
        this.currentStepNo = 0;
        this.isDragging = false;
        this.position = this[_calculateNewPosition](this.centerX, this.centerY - this.radius);
        this.value = this.options.min;

        this.lastTouchType = '';
        this.animationFrameId = null;

        this[_initSlider]();
        this[_initEventHandlers]();
    }

    /**
     * Creates slider composed of underlying stripped SVG circle and top colored circle which will behave as slider.
     */
    [_initSlider]() {
        this.container = document.getElementById(this.options.container);

        // create root svg only when the first slider is added to the container.
        this.rootSVG = document.getElementById(this.id);
        if (this.rootSVG === null) {
            this.rootSVG = this[_createRootSVG](this.container.offsetWidth);
            this.container.appendChild(this.rootSVG);
        }

        this.slider = this[_createSliderCircle]();
        this.handle = this[_createHandle]();
        this.clickCircle = this[_createClickCircle]();

        this.rootSVG.appendChild(this[_createEmptyCircle]());
        this.rootSVG.appendChild(this.clickCircle);
        this.rootSVG.appendChild(this.slider);
        this.rootSVG.appendChild(this.handle);
    }

    /**
     * Creates root svg to which all sliders residing in the same container are later appended.
     * @returns {SVGCircleElement}
     */
    [_createRootSVG](boxSize) {
        const svg = document.createElementNS(SVG_NAMESPACE, "svg");


        // let's keep it a square
        svg.setAttributeNS(null, "class", "sliderRootSVG");
        svg.setAttributeNS(null, "id", this.id);
        svg.setAttributeNS(null, "width", boxSize);
        svg.setAttributeNS(null, "height", boxSize);
        svg.setAttributeNS(null, "viewBox", "-200 -200 400 400");
        svg.setAttributeNS(null, "preserveAspectRatio", "xMidYMid none");

        return svg;
    }

    [_transformClientToLocalCoordinate](svgPoint, event) {
        svgPoint.x = event.clientX;
        svgPoint.y = event.clientY;

        return svgPoint.matrixTransform(this.rootSVG.getScreenCTM().inverse());
    }

    /**
     * Creates new SVG circle used as a top slider.
     */
    [_createSliderCircle]() {
        const slider = this[_createCircle]();

        slider.setAttributeNS(null, 'class', 'top-slider');
        slider.setAttributeNS(null, 'transform', 'rotate(-90)');
        slider.setAttributeNS(null, 'stroke-dasharray', `${this.circumference} ${this.circumference}`);
        slider.setAttributeNS(null, 'stroke-dashoffset', `${this.circumference}`);

        slider.style.stroke = this.options.color;
        slider.style.strokeWidth = STROKE_WIDTH + "px";

        return slider;
    }

    /**
     * Creates transparent circle so we can click on it (dashed border is not click-able everywhere)
     * @returns SVG
     */
    [_createClickCircle]() {
        const slider = this[_createCircle]();

        slider.style.strokeWidth = STROKE_WIDTH + "px";
        slider.style.stroke = "transparent";

        return slider;
    }

    /**
     * Creates new SVG circle with dashed border used as empty "underlying" slider.
     */
    [_createEmptyCircle]() {
        const slider = this[_createCircle]();

        slider.setAttributeNS(null, 'class', 'dashed-circle');
        slider.setAttributeNS(null, 'transform', 'rotate(-90)');
        slider.style.strokeWidth = STROKE_WIDTH + "px";
        slider.style.strokeDasharray = "5, 2";
        slider.style.fill = "#FFF";

        return slider;
    }

    /**
     * Creates new SVG circle element based on passed options.
     *
     * @returns {SVGCircleElement}
     */
    [_createCircle]() {
        const slider = document.createElementNS(SVG_NAMESPACE, 'circle');
        slider.setAttributeNS(null, "cx", this.centerX);
        slider.setAttributeNS(null, "cy", this.centerY);
        slider.setAttributeNS(null, "r", this.radius);
        slider.setAttributeNS(null, "fill", "none");

        return slider;
    }

    /**
     * Creates a handle for the slider.
     */
    [_createHandle]() {
        const handle = document.createElementNS(SVG_NAMESPACE, 'circle');
        handle.setAttributeNS(null, "cx", `${this.centerX}`);
        handle.setAttributeNS(null, "cy", `${this.centerY - this.radius}`);
        handle.setAttributeNS(null, "r", `${HANDLER_RADIUS}`);
        handle.setAttributeNS(null, "fill", "#fff");
        handle.setAttributeNS(null, "class", "handle");
        handle.setAttributeNS(null, "id", "handle" + this.options.container + this.radius); // add uniqueId

        return handle;
    }

    [_deg2Step](deg) {
        const val = this[_deg2Val](deg);

        return this[_val2Step](val);
    }

    [_deg2Val](deg) {
        const range = this.options.max - this.options.min;

        return Math.round(deg * (range / 360.0)) + this.options.min;
    }

    [_val2Step](val) {
        return Math.round((val - this.options.min) / this.options.step)
    }

    [_step2Rad](stepNo) {
        const val = stepNo * this.options.step + this.options.min;
        const adjustedVal = val - this.options.min;
        const range = this.options.max - this.options.min;
        const degrees = this.options.max === val ? 359.99 : (Math.round(adjustedVal * (360.0 / range))) % 360;

        return Math.round(degrees * Math.PI / 180 * 100) / 100;
    }

    [_point2Radians](x, y) {
        // calculate distance from rotated circle (0° is on top)
        // replacing x and y in Math.atan2 method rotates the axis for 90 degrees but in wrong direction
        // multiply Y with -1 to "rotate" for 180° in the right direction :)
        return Math.atan2(x - this.centerX, -y - this.centerY);
    }

    [_initEventHandlers]() {

        this.container.addEventListener("mousemove", e => this[_handleDrag](e));
        this.container.addEventListener("mouseup", e => this[_cancelDrag](e));
        this.container.addEventListener("mouseleave", e => this[_cancelDrag](e));

        this.container.addEventListener("touchcancel", e => this[_touchHandler](e));
        this.container.addEventListener("touchend", e => this[_touchHandler](e));

        this.clickCircle.addEventListener('click', e => this[_handleSliderClick](e));
        this.clickCircle.addEventListener("touchend", e => this[_touchHandler](e));
        this.clickCircle.addEventListener("touchstart", e => this[_touchHandler](e));

        this.slider.addEventListener('click', e => this[_handleSliderClick](e));
        this.slider.addEventListener("touchend", e => this[_touchHandler](e));
        this.slider.addEventListener("touchstart", e => this[_touchHandler](e));


        this.handle.addEventListener("touchmove", e => this[_touchHandler](e));
        this.handle.addEventListener("touchstart", e => this[_touchHandler](e));
        this.handle.addEventListener("mousedown", e => this[_startDrag](e));
    }

    [_startDrag](e) {
        e.preventDefault();
        this.isDragging = true;
    };

    /**
     * Handles drag as long as the touch/mouse is inside the tolerance radius.
     * @param e
     */
    [_handleDrag](e) {

        e.preventDefault();
        if (!this.isDragging) {
            return;
        }

        const svgPoint = this.rootSVG.createSVGPoint();
        const localCoords = this[_transformClientToLocalCoordinate](svgPoint, e);
        const mouseHandleOffsetX = this.position.x - localCoords.x;
        const mouseHandleOffsetY = this.position.y - localCoords.y;
        if (mouseHandleOffsetX > TOLERANCE || mouseHandleOffsetY > TOLERANCE) {
            this[_cancelDrag](e);
        } else {
            const angelRadians = this[_point2Radians](localCoords.x, localCoords.y);
            this[_move](angelRadians);
        }
    }

    /**
     * Cancels drag and finishes the move by scrolling to the closest step.
     *
     * @param e
     */
    [_cancelDrag](e) {
        e.preventDefault();
        this.options.eventType = e.type;
        // only complete step if you are currently moving
        if (this.isDragging) {
            this.stepNo = this[_val2Step](this.value);
        }

        this.isDragging = false;
        this.options.valueChange(this.currentValue, this.options.eventType);
        this.options.eventType = '';
    }

    [_handleSliderClick](e) {
        const svgPoint = this.rootSVG.createSVGPoint();
        const localCoords = this[_transformClientToLocalCoordinate](svgPoint, e);
        const newPosition = this[_calculateNewPosition](this[_point2Radians](localCoords.x, localCoords.y));
        const nextStep = this[_deg2Step](newPosition.degrees);

        if (this.currentStepNo === nextStep) {
            this.handle.classList.add('same-step-error');
            setTimeout(() => this.handle.classList.remove('same-step-error'), 300);
        } else {
            this.stepNo = nextStep;
        }

        this.options.eventType = e.type;
    }

    [_touchHandler](e) {
        const touches = e.changedTouches;

        // Ignore multi-touch
        if (touches.length > 1) return;

        const touch = touches[0];
        const events = ["touchstart", "touchmove", "touchend", "touchcancel"];
        const mouseEvents = ["mousedown", "mousemove", "mouseup", "mouseleave"];
        const ev = events.indexOf(e.type);

        if (ev === -1) return;

        const type = e.type === events[2] && this.lastTouchType === events[0] ? 'click' : mouseEvents[ev];
        const simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(type, true, true, window, 1,
            touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);

        touch.target.dispatchEvent(simulatedEvent);
        e.preventDefault();
        this.lastTouchType = e.type;

        this.options.eventType = e.type;
    };

    [_isIEorEdge]() {
        return document.documentMode || navigator.appName === 'Microsoft Internet Explorer' || (navigator.appName === "Netscape" && navigator.appVersion.indexOf('Edge') > -1);
    }
}

;/*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
!function(e,t){"use strict";function n(){var e=A.splice(0,A.length);for(et=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)T(e[n],t)}function o(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],V(t,ae[a(t)])}function l(e){return function(t){ke(t)&&(T(t,e),ie.length&&r(t.querySelectorAll(ie),e))}}function a(e){var t=Ge.call(e,"is"),n=e.nodeName.toUpperCase(),r=ce.call(le,t?ne+t.toUpperCase():te+n);return t&&-1<r&&!i(n,t)?-1:r}function i(e,t){return-1<ie.indexOf(e+'[is="'+t+'"]')}function u(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[Q]||2,a=e[W]||3;!at||o&&o!==t||!t[j]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==a)||t[j](r,n===l?null:e.prevValue,n===a?null:e.newValue)}function c(e){var t=l(e);return function(e){A.push(t,e.target),et&&clearTimeout(et),et=setTimeout(n,1)}}function s(e){lt&&(lt=!1,e.currentTarget.removeEventListener(J,s)),ie.length&&r((e.target||y).querySelectorAll(ie),e.detail===B?B:x),Ue&&p()}function m(e,t){var n=this;Xe.call(n,e,t),O.call(n,{target:n})}function f(e,t,n){var r=t.apply(e,n),l=a(r);return-1<l&&V(r,ae[l]),n.pop()&&ie.length&&o(r.querySelectorAll(ie)),r}function d(e,t){Se(e,t),I?I.observe(e,Ye):(ot&&(e.setAttribute=m,e[_]=D(e),e[k](ee,O)),e[k](Y,u)),e[X]&&at&&(e.created=!0,e[X](),e.created=!1)}function p(){for(var e,t=0,n=xe.length;t<n;t++)e=xe[t],ue.contains(e)||(n--,xe.splice(t--,1),T(e,B))}function h(e){throw new Error("A "+e+" type is already registered")}function T(e,t){var n,r,o=a(e);-1<o&&!Ze.call(e,"TEMPLATE")&&(S(e,ae[o]),o=0,t!==x||e[x]?t!==B||e[B]||(e[x]=!1,e[B]=!0,r="disconnected",o=1):(e[B]=!1,e[x]=!0,r="connected",o=1,Ue&&ce.call(xe,e)<0&&xe.push(e)),o&&(n=e[t+q]||e[r+q])&&n.call(e))}function L(){}function M(e,t,n){var r=n&&n[Z]||"",o=t.prototype,l=Fe(o),a=t.observedAttributes||pe,i={prototype:l};_e(l,X,{value:function(){if(Ae)Ae=!1;else if(!this[He]){this[He]=!0,new t(this),o[X]&&o[X].call(this);var e=Oe[De.get(t)];(!be||e.create.length>1)&&H(this)}}}),_e(l,j,{value:function(e){-1<ce.call(a,e)&&o[j]&&o[j].apply(this,arguments)}}),o[z]&&_e(l,G,{value:o[z]}),o[K]&&_e(l,$,{value:o[K]}),r&&(i[Z]=r),e=e.toUpperCase(),Oe[e]={constructor:t,create:r?[r,Ie(e)]:[e]},De.set(t,e),y[R](e.toLowerCase(),i),g(e),Ne[e].r()}function E(e){var t=Oe[e.toUpperCase()];return t&&t.constructor}function v(e){return"string"==typeof e?e:e&&e.is||""}function H(e){for(var t,n=e[j],r=n?e.attributes:pe,o=r.length;o--;)t=r[o],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function g(e){return e=e.toUpperCase(),e in Ne||(Ne[e]={},Ne[e].p=new we(function(t){Ne[e].r=t})),Ne[e].p}function b(){ge&&delete e.customElements,de(e,"customElements",{configurable:!0,value:new L}),de(e,"CustomElementRegistry",{configurable:!0,value:L});for(var t=w.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[He]||(Ae=!0,t=Oe[De.get(e.constructor)],r=be&&1===t.create.length,e=r?Reflect.construct(n,pe,t.constructor):y.createElement.apply(y,t.create),e[He]=!0,Ae=!1,r||H(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){ve=!0,de(n,He,{value:e[t]})}}}(t[n]));y.createElement=function(e,t){var n=v(t);return n?We.call(this,e,Ie(n)):We.call(this,e)},tt||(rt=!0,y[R](""))}var y=e.document,C=e.Object,w=function(e){var t,n,r,o,l=/^[A-Z]+[a-z]/,a=function(e){var t,n=[];for(t in u)e.test(t)&&n.push(t);return n},i=function(e,t){(t=t.toLowerCase())in u||(u[e]=(u[e]||[]).concat(t),u[t]=u[t.toUpperCase()]=e)},u=(C.create||C)(null),c={};for(n in e)for(o in e[n])for(r=e[n][o],u[o]=r,t=0;t<r.length;t++)u[r[t].toLowerCase()]=u[r[t].toUpperCase()]=o;return c.get=function(e){return"string"==typeof e?u[e]||(l.test(e)?[]:""):a(e)},c.set=function(e,t){return l.test(e)?i(e,t):i(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var A,O,N,D,I,F,S,V,P,R="registerElement",U=1e5*e.Math.random()>>0,_="__"+R+U,k="addEventListener",x="attached",q="Callback",B="detached",Z="extends",j="attributeChanged"+q,G=x+q,z="connected"+q,K="disconnected"+q,X="created"+q,$=B+q,Q="ADDITION",W="REMOVAL",Y="DOMAttrModified",J="DOMContentLoaded",ee="DOMSubtreeModified",te="<",ne="=",re=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,oe=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],le=[],ae=[],ie="",ue=y.documentElement,ce=le.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},se=C.prototype,me=se.hasOwnProperty,fe=se.isPrototypeOf,de=C.defineProperty,pe=[],he=C.getOwnPropertyDescriptor,Te=C.getOwnPropertyNames,Le=C.getPrototypeOf,Me=C.setPrototypeOf,Ee=!!C.__proto__,ve=!1,He="__dreCEv1",ge=e.customElements,be=!/^force/.test(t.type)&&!!(ge&&ge.define&&ge.get&&ge.whenDefined),ye=C.create||C,Ce=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ce.call(t,e)]},set:function(r,o){e=ce.call(t,r),e<0?n[t.push(r)-1]=o:n[e]=o}}},we=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,o={"catch":function(){return o},then:function(e){return n.push(e),r&&setTimeout(t,1),o}};return e(t),o},Ae=!1,Oe=ye(null),Ne=ye(null),De=new Ce,Ie=function(e){return e.toLowerCase()},Fe=C.create||function ct(e){return e?(ct.prototype=e,new ct):this},Se=Me||(Ee?function(e,t){return e.__proto__=t,e}:Te&&he?function(){function e(e,t){for(var n,r=Te(t),o=0,l=r.length;o<l;o++)n=r[o],me.call(e,n)||de(e,n,he(t,n))}return function(t,n){do{e(t,n)}while((n=Le(n))&&!fe.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Ve=e.MutationObserver||e.WebKitMutationObserver,Pe=e.HTMLAnchorElement,Re=(e.HTMLElement||e.Element||e.Node).prototype,Ue=!fe.call(Re,ue),_e=Ue?function(e,t,n){return e[t]=n.value,e}:de,ke=Ue?function(e){return 1===e.nodeType}:function(e){return fe.call(Re,e)},xe=Ue&&[],qe=Re.attachShadow,Be=Re.cloneNode,Ze=Re.closest||function(e){for(var t=this;t&&t.nodeName!==e;)t=t.parentNode;return t},je=Re.dispatchEvent,Ge=Re.getAttribute,ze=Re.hasAttribute,Ke=Re.removeAttribute,Xe=Re.setAttribute,$e=y.createElement,Qe=y.importNode,We=$e,Ye=Ve&&{attributes:!0,characterData:!0,attributeOldValue:!0},Je=Ve||function(e){ot=!1,ue.removeEventListener(Y,Je)},et=0,tt=R in y&&!/^force-all/.test(t.type),nt=!0,rt=!1,ot=!0,lt=!0,at=!0;if(Ve&&(P=y.createElement("div"),P.innerHTML="<div><div></div></div>",new Ve(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){P=he(Re,"innerHTML");var n=P&&P.set;n&&de(Re,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),P=null}).observe(P,{childList:!0,subtree:!0}),P.innerHTML=""),tt||(Me||Ee?(S=function(e,t){fe.call(t,e)||d(e,t)},V=d):(S=function(e,t){e[_]||(e[_]=C(!0),d(e,t))},V=S),Ue?(ot=!1,function(){var e=he(Re,k),t=e.value,n=function(e){var t=new CustomEvent(Y,{bubbles:!0});t.attrName=e,t.prevValue=Ge.call(this,e),t.newValue=null,t[W]=t.attrChange=2,Ke.call(this,e),je.call(this,t)},r=function(e,t){var n=ze.call(this,e),r=n&&Ge.call(this,e),o=new CustomEvent(Y,{bubbles:!0});Xe.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[Q]=o.attrChange=0,je.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[_],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],t=new CustomEvent(Y,{bubbles:!0}),t.attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[Q]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,je.call(n,t))};e.value=function(e,l,a){e===Y&&this[j]&&this.setAttribute!==r&&(this[_]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,a)},de(Re,k,e)}()):Ve||(ue[k](Y,Je),ue.setAttribute(_,1),ue.removeAttribute(_),ot&&(O=function(e){var t,n,r,o=this;if(o===e.target){t=o[_],o[_]=n=D(o);for(r in n){if(!(r in t))return N(0,o,r,t[r],n[r],Q);if(n[r]!==t[r])return N(1,o,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return N(2,o,r,t[r],n[r],W)}},N=function(e,t,n,r,o,l){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};a[l]=e,u(a)},D=function(e){for(var t,n,r={},o=e.attributes,l=0,a=o.length;l<a;l++)t=o[l],"setAttribute"!==(n=t.name)&&(r[n]=t.value);return r})),y[R]=function(e,t){if(n=e.toUpperCase(),nt&&(nt=!1,Ve?(I=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Ve(function(r){for(var o,l,a,i=0,u=r.length;i<u;i++)o=r[i],"childList"===o.type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,at&&l[j]&&"style"!==o.attributeName&&(a=Ge.call(l,o.attributeName))!==o.oldValue&&l[j](o.attributeName,o.oldValue,a))})}(l(x),l(B)),F=function(e){return I.observe(e,{childList:!0,subtree:!0}),e},F(y),qe&&(Re.attachShadow=function(){return F(qe.apply(this,arguments))})):(A=[],y[k]("DOMNodeInserted",c(x)),y[k]("DOMNodeRemoved",c(B))),y[k](J,s),y[k]("readystatechange",s),y.importNode=function(e,t){switch(e.nodeType){case 1:return f(y,Qe,[e,!!t]);case 11:for(var n=y.createDocumentFragment(),r=e.childNodes,o=r.length,l=0;l<o;l++)n.appendChild(y.importNode(r[l],!!t));return n;default:return Be.call(e,!!t)}},Re.cloneNode=function(e){return f(this,Be,[!!e])}),rt)return rt=!1;if(-2<ce.call(le,ne+n)+ce.call(le,te+n)&&h(e),!re.test(n)||-1<ce.call(oe,n))throw new Error("The type "+e+" is invalid");var n,o,a=function(){return u?y.createElement(m,n):y.createElement(m)},i=t||se,u=me.call(i,Z),m=u?t[Z].toUpperCase():n;return u&&-1<ce.call(le,te+m)&&h(m),o=le.push((u?ne:te)+n)-1,ie=ie.concat(ie.length?",":"",u?m+'[is="'+e.toLowerCase()+'"]':m),a.prototype=ae[o]=me.call(i,"prototype")?i.prototype:Fe(Re),ie.length&&r(y.querySelectorAll(ie),x),a},y.createElement=We=function(e,t){var n=v(t),r=n?$e.call(y,e,Ie(n)):$e.call(y,e),o=""+e,l=ce.call(le,(n?ne:te)+(n||o).toUpperCase()),a=-1<l;return n&&(r.setAttribute("is",n=n.toLowerCase()),a&&(a=i(o.toUpperCase(),n))),at=!y.createElement.innerHTMLHelper,a&&V(r,ae[l]),r}),addEventListener("beforeunload",function(){delete y.createElement,delete y.importNode,delete y[R]},!1),L.prototype={constructor:L,define:be?function(e,t,n){if(n)M(e,t,n);else{var r=e.toUpperCase();Oe[r]={constructor:t,create:[r]},De.set(t,r),ge.define(e,t)}}:M,get:be?function(e){return ge.get(e)||E(e)}:E,whenDefined:be?function(e){return we.race([ge.whenDefined(e),g(e)])}:g},!ge||/^force/.test(t.type))b();else if(!t.noBuiltIn)try{!function(t,n,r){var o=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[Z]="a",t.prototype=Fe(Pe.prototype),t.prototype.constructor=t,e.customElements.define(r,t,n),!o.test(y.createElement("a",{is:r}).outerHTML)||!o.test((new t).outerHTML))throw n}(function st(){return Reflect.construct(Pe,[],st)},{},"document-register-element-a"+U)}catch(it){b()}if(!t.noBuiltIn)try{if($e.call(y,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(ut){Ie=function(e){return{is:e.toLowerCase()}}}}(window);

;
//# sourceMappingURL=scripts.js.map