# Side Notes for HTML


**2 types of elements**

**Inline Elements**
- do not start a new line

**Block Elements**
- starts a new line and takes up the entire line width available

Examples:
**Inline:** `<span>` `<img>` `<a>`

**Block** `<div>` `<h1>` `<p>` `<form>`

Other elements include `<strong>` `<em>`

**Links**
Surround the words you wish to be a clickable link with `<a href="location the click should send the user">`

Note: if you include in your `<a href>  target="_blank"` then when the user clicks the link, it will open up the location/page in a new browser tab. (Primarily used if it is leading to an external site source)

Basic format to always start off with when creating an HTML doc:

`<!DOCTYPE html>`

`<html>`

    <head>
        <title></title>
    </head>

    <body>
        <h1></h1>
        <p></p>
    </body>

`</html>`<br>

**Forms**
for HTML, you can only build the form structurly, and you must use a dynamic language to provide said form with functionality.

`<form action="process.php" method="POST">`<br>

    <label>First Name</label>
    <input type="text" name="firstName">

    <label>Last Name</lastName>
    <input type="text" name="lastName">

`</form>`<br>

*if you put first name in its own div and last name in its own div, they will populate onto seperate lines.

*for email form field, it would be its own div also and would look like this:

`<div>`<br>

    <label>Email</label>
    <input type="email" name="email" placeholder="Enter email here.">

`</div>`<br>

-all of the div for the email goes within the form tags.

_for a message component of this form_

`<div>`

    <label>Message</label>
    <textarea name="message"></textarea>

`</div>`

_for a select list_

`<div>`

    <label>Gender</label>
    <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>

`</div>`

**Other form field div sections include:**

`<div>`<br>

    <label>Age</label>
    <input type="number" name="age">

`</div>`<br>

`<div>`<br>

    <label>Birthday</label>
    <input type="date" name="birthday">

`</div>`<br>

**Input/Submit Button**

`<input type="submit" name="submit" value="Submit">`

_Buttons outside of forms_

`<button> Click Me </button>`

_Images_

`<img src="images/sample.jpg" alt="My Sample Image" width="200">`

-have an images folder for all images on site


**Semantic Tags**

`<header>`

`<footer>`

`<aside>` side bar content

`<main>`

`<article>`

`<nav>`  navigation bar

`<section>`

`<details>`







