# Express Local Library Tutorial

![Home screen](https://i.imgur.com/YoPocNF.png)

A simple CRUD Library website written with Express and Pug and using MongoDB for persistence. It is my implementation of the [MDN Express Tutorial exercise](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website).

The library handles four main forms of data: books, authors, book instances and genres. Users can create, list, detail, update and delete each of those, provided they do not depend on any other items (e.g., a genre cannot be deleted if it is referenced by existing books).

Bootstrap was used for the styling and Heroku was chosen as the deployment platform.

[Check out the live version](https://fierce-stream-29420.herokuapp.com/catalog).
