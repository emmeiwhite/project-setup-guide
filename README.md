# Project Setup Step by Step

- Setup git
    - .gitignore
    - install .gitignore extension
    - cmg+shift+p
    - > .gitnore --->Node .gitignore (select)
- Use nvm to select particular version of node used in the project
- Setup Node.js project with `npm init` & `set scripts`
- Setup `typescript` - `npm i -D typescript` - create typescipt config file with the command `npx tsc --init` and it will generate `tsconfig.json` file in our project. - uncomment these two lines

```js
"rootDir": "./src",
"outDir": "./dist"
```

. Here we are choosing a `/dist` folder to store our compiled ts files.

- Now we can write our typescript code in `/src` folder but the compiled files need to go to the `/dist` folder and for this we do:
    - `npx tsc` (just once)
- We must install **type definitions d.ts files** of packages we use from npm registry so that `typescript` knows the types associated with these. For example for **Node.js** we can install types with:
    - `npm i -D @types/node`

- Install `prettier` with `--save-exact` so that we'll have the same version of the `prettier` for all our team members.
    - `npm i -D --save-exact prettier`
    - Create a `.prettierrc` configuration file
    - Then we create a `.prettierignore` file to ignore any file from prettier formatting.
    - Follow these docs [Prettier setup](https://prettier.io/docs/install) since there are few commands to run.
    - Run this command to create a `.prettierignore` file: `node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"`
    - Then we need to run the `prettier` and this is the command to run prettier `npx prettier . --write` and fix formatting issues as well.
    - We use `npx prettier . --check` to check for issues but not yet fix these.
    - ````json
      "scripts": {
        "dev": "node src/server.js",
        "format:fix": "prettier . --write",
        "format:check": "prettier . --check"
      },```

      ````

    -
