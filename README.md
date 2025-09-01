# Project Setup Step by Step

- Setup git
    - .gitignore
    - install .gitignore extension
    - cmg+shift+p
    - > .gitnore --->Node .gitignore (select)
- Use nvm to select particular version of node used in the project
- Setup Node.js project with `npm init` & `set scripts`
- Setup `typescript` - `npm i -D typescript` - create typescipt config file with the command `npx tsc --init` and it will generate `tsconfig.json` file in our project. - uncomment these two lines `js"rootDir": "./src",
"outDir": "./dist"`. Here we are choosing a `/dist` folder to store our compiled ts files.
- Now we can write our typescript code in `/src` folder but the compiled files need to go to the `/dist` folder and for this we do:
    - `npx tsc` (just once)
- We must install **type definitions d.ts files** of packages we use from npm registry so that `typescript` knows the types associated with these. For example for **Node.js** we can install types with:
    - `npm i -D @types/node`
