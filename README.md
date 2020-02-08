# fbc-frontend
**Table of Contents**

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Project Set Up](#project-set-up)
  * [Create your First Build](#create-your-first-build)
* [Folder Structure](#folder-structure)
  * [Views](#views)
  * [Redux](#redux)
* [Best Practices](#best-practices)
* [Under the Hood](#under-the-hood)
  * [Babel](#babel)
  * [Webpack](#webpack)

## Getting Started
### Prerequisites 
* A device capable of running a web server
* Node, npm, git installed

### Project Set Up
* Get your copy of the project
  * Navigate to the folder you want to conatain this project.
  * Clone the repository by running the git command `git clone https://github.com/BrianT1414/fbc-frontend.git`.
  * This will create a new folder called `fbc-frontend` that contains the project.

* Install required npm modules
  * Make sure you are in the project folder (`cd ./fbc-frontend`).
  * Run the npm command `npm install`.

The repository is set up in such a way that you can simply point your web server to the root folder.

### Create your first build

*Depending on your level of JavaScript knowledge, a precursor on what's about to be explained may be appreciated. If so, check out the [Under the Hood](#under-the-hood) section.*

There are two custom npm commands (really just shortcuts to webpack commands) that will make our JavaScript code ready to use. They are:
* `npm run build`
* `npm run build:watch`
Running the build command will run execute `webpack` which will automatically transpile our code and bundle it into a file called `bundle.js` inside the `build` folder. Running the watch command will do the same thing, except it will continuously monitor our code for changes and automatically re-build once we update a file. Most of the time you will prefer to use the watch command.

The `index.html` is set up to include the script at that location `./build/bundle.js`. And that it. Loading the index.html in a browser will now run the JavaScript we write.

## Folder Structure

### Views

The views folder is a little self explanitory. It conatains components that will display something in the browser or that conatain logic related to what should be displayed. This includes the sub-folders `components`, `containers`, and `pages`.

**Components:** React components that are easily reusable, and are very unopinionated or "dumb". This means they don't have any awareness of the outside world. They serve a specific purpose and do not have access to anything that isn't strictly necessary.

**Containers:** React components that connect outside logic and data from `redux` to pages or components that need them. 

**Pages:** React components that represent a page on the website. These components are responsible for deciding what should be displayed on the page, and for page routing itself.

### Redux

The redux folder contains the logic for our data. This will be primarily limited to data from our API, but can also be used for important pieces of app data. We will subscribe to the "Ducks" pattern. *More info to be added when redux is actually added to the project*.

## Best Practices

Some general best practices to try to follow.
* Descriptive variable names - Abbreviations are quicker to type, but can be hard to decypher. Opt for more descriptive over concise.
* Variable names begin with lower case - Components are generally reserved for having uppercase first letters. You may use camel-case or underscore (`myVariable`, `my_variable`). Underscore is slightly preferred, but not that important.
* Use functional components over class components - React now recommends the use of functional components over classes. Classes make it easier to learn the react life-cycle, so they are not prohibited, but they may be converted later on.
* Put styles in their own file. To make display components more readable, put all styles into their own file relative to the component
```
MyComponent
L index.js
L styles.js
```
* Avoid passing all props to children `<MyComponent {...props} />`. Only pass props that are needed by the child.

## Under the Hood
### Babel
Because JavaScript is executed on the client through a browser (which we can't control), instead of a server (which we can control), modern JavaScript is found in many forms. The official JavaScript spec is not always adhered to by browsers, and the ones that do may take months or years to begin supporting new features. Because of this lack of consistency, JavaScript needs to be written in a way that will work on all or most browsers, regardless of their level of support for new features. The most common example is [**ES6**](https://www.w3schools.com/js/js_es6.asp). ES6 is basically just an updated version of the JavaScript language that added many very well recieved features. However, not all browsers have implemented support for it yet. This will almost certainly be a continuing issue in web development.

But we really really want to be able to write code using these new features. So how do we do it?

Code transpiling. Transpiling is the process of translating code in one language to another. Not to be confused with *compiling*. Basically, we can write our code in using new features that may not be supported, and then run it through a transpiler that converts those new features into a more widely supported version of the same code.

Here is an explanation of the two (borrowed from [this SO answer](https://stackoverflow.com/a/44932758/9381601)).

>**Compiler:** is an umbrella term to describe a program that takes source code written in one language and produce a (or many) output file in some other language. In practice we mostly use this term to describe a compiler such as gcc which takes in C code as input and produces a binary executable (machine code) as output.

>**Transpiler:** also known as source-to-source compilers. So in essence they are a subset of compilers which take in a source code file and convert it to another source code file in some other language or a different version of the same language. The ouput is generally understandable by a human. This output still has to go through a compiler or interpreter to be able to run on the machine.

To transpile our code, we will be using [Babel](https://babeljs.io/). Babel is an incredibly powerful tool that has enough plugins and configurations to keep you busy for years. Luckily its already set up for this project and we only need a few plugins.

### Webpack
The second part under the hood that's worth talking about is `webpack`. In a typical javascript application that uses npm modules, there will easily be tens of thousands of files (after just adding boilerplate this project already contains 8,668 files totaling ~38mbs). Imagine trying to include all of those in an HTML file... Not very practical.

Webpack does a few things for us. 

First, it does something we call "tree shaking". Its essentially a way to remove all of the files that we don't end up using. It parses our code and only includes what we actually use. 

The second thing it does is bundle our code into one or a few files (depending on how its configured). In our project, the net result is taking 8,668 files and bundling the necessary ones in to a single javascript file coming in at about 3mbs. This process is essential to making a fast responding website, and one that's easy to manage.
