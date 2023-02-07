echo "Hello, I will help you set up you project directories."

mkdir my-project
cd my-project && mkdir assets css js
touch index.html
cd assets && touch logo.svg
touch photo.jpg
cd ../css && touch styles.css
cd ../js && touch scripts.js

echo "Your project directories are now ready."