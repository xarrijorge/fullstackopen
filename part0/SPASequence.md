* ## Squence of Events when a user visits the SPA version of our app.

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server-->browser: HTML-code 200
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: spa.js

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

* ## Squence of Events when a user attempts to add a new not to the SPA version of our app.

browser->server: browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
server->browser: {"message":"content"}

payload gets pushed to the array in our data.json file and gets interpreted by the logic in our spa.js file.