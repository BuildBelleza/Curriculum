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

`<!DOCTYPE html>`<br>
`<html>`<br>
    `<head>`<br>
        `<title></title>`<br>
    `</head>`<br>
    `<body>`<br>
        `<h1></h1>`<br>
        `<p></p>`<br>
    `</body>`<br>
`</html>`<br>

**Forms**
for HTML, you can only build the form structurly, and you must use a dynamic language to provide said form with functionality.

`<form action="process.php" method="POST">`<br>
    `<label>First Name</label>`<br>
    `<input type="text" name="firstName">`<br>
    `<label>Last Name</lastName>`<br>
`</form>`<br>

*if you put first name in its own div and last name in its own div, they will populate onto seperate lines.

for email form field, it would be its own div also and would look like this:

`<div>`<br>
    `<label>Email</label>`<br>
    `<input type="email" name="email>`<br>
`</div>`<br>

-all of the div for the email goes within the form tags.

