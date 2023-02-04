# DOM 102
## Modifying the DOM comes down to learning a few motheods and properties.

### Creating Elements
```javascript
const div = document.createElement('div');
div.innerText = 'Hello World';
div.innerHTML = `<h1>Hello World</h1>`;
root.append(div);
```
first you gotta create element
then you gotta put something into/or populate something in it it like content or something
then you gotta append it


### Selecting Elements
```javascript
// returns a list of nodes
document.getElementsByTagName('p');
document.getElementsByClassName('items');
document.querySelectorAll('.items');

// returns a single node
document.getElementById('root');
document.querySelector('.items');

```

### Modifying Elements
```javascript
const root = document.getElementById('root');   have to cache it before...
root.setAttribute('data-id', 'someId'); ...you can modify it.
root.style.color = 'crimson'
root.innerText = 'Some new text here';
root.removeAttribute('data-id');

```

