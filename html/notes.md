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
    <input type="email" name="email>

`</div>`<br>

-all of the div for the email goes within the form tags.



