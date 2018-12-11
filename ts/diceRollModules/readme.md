#1 SystemJS was used to Load CommonJS Modules

0. `npm install express`
1. Create a new file called server.js
2. in index.html add

 <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.12/system.js"></script>
    <script>
        SystemJS.import('main.js')
    </script>
3. create `main.ts`
4. to compile `main.ts` run `tsc main.ts`
5. to run serwer type `node server.js`

#2 To declare import note that you need to reference the file as a .js
