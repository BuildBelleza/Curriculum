# NodeJS 105
## **package.json** manages 3rd party modules found at [npm's repositiory](https://www.npmjs.com/)

## What is npm?

[Docs](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)

- online repo for publishing  of open-source Node.js projects
- command line utility functionality for interacting with said repo that aids in package installation, version management, and dependency management.
- npm is a repo of libraries of modules that were paired with node at install.

### Open-Source software
- free to use as per a specific license
- developers are not compensated
- not guaranteed to work at all times, could break

### Synonyms
- library
- module
- package

npm init -y = -y = 

### npm commands
- 'npm -v'  => version
- 'npm install -g <someModule>' (global install, not recommended)
- 'npm install<someModule>' (local install, preferred)
- 'npm init -y' (creates **package.json** with default values)

### package.json
- "dependencies" list production libraries
- "devDependencies" list the libraries used to write the code itself
- is created by 'npm init -y'
- determines the contents of **node_modules**

### node-modules
- contains all third-party modules installed with 'npm
- each module has its own **package.json** so this directory can be quite large
- do not ever modify the code within this directory

### Executing Commands (if applicable)
- using cowsay as an example
- node_modules/.bin/cowsay JavaScript FTW:
```
$ node_modules/.bin/cowsay JavaScript FTW:
 _________________
< JavaScript FTW: >
 -----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

hp@CamillaWilson MINGW64 ~/Projects/Curriculum/JavaScript/NodeJS/Node 105/cowsay-demo (main)
```
*** cowsay vs cowthink ***
```
hp@CamillaWilson MINGW64 ~/Projects/Curriculum/JavaScript/NodeJS/Node 105/cowsay-demo (main)
$ cd node-modules/.bin/cowsayJavaScript FTW!
bash: cd: too many arguments

hp@CamillaWilson MINGW64 ~/Projects/Curriculum/JavaScript/NodeJS/Node 105/cowsay-demo (main)
$ node_modules/.bin/cowthink node.js is cool
 _________________
< node.js is cool >
 -----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```               

```
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

// or cowsay.think()
```
=
```
 _________________
( I'm a moooodule )
 -----------------
        o   ^__^
         o  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

No global install because its not something you would ever use outside of what you are working on.

