const p = document.querySelector('#paragraph');

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

window.addEventListener('click', makeGreen);

// styled console log
console.log('%c text style', 'font-size:20px; background: red');

// warning!
console.warn('warning');

//error!
console.error('error');

//info!
console.info('info');

//testing
console.assert(1 === 2, 'that is wrong');

// viewing DOM Elements

console.log(p);
console.dir(p);

console.clear();

// grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

//timing

console.time('fetching data');
fetch('https://api.github.com/users/achroscielewska')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });


// table
console.table(dogs);



