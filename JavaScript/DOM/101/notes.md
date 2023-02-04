# DOM 101
## JavaScript's ability to make web pages interactive is directly related to the DOM.

### Terms

**Application Programming Interface (API)**
A method or data able to be consumed by developers in addition to the author(s) who created it.

**Document Object**
An object that represents the root of the hTML document.

**Document Object Model**
A representation of the HTML structure with which any scripting language (e.g. JavaScript) can interact. The DOM is sometimes referred to as a node tree or a DOM tree.

**Window Object**
An object that represents the browser.

In order to see the document as an object you need to use console.log
ex: 
console.log({document})

When executed you are able to drill down into the keys and values that make up the document model.

document.getElementById('what_is_the_dom').innerText = "What is the meaning of life?'
document object. API  - Parts 