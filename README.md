# Stranger Match

Welcome to Stranger Match! Where Strangers match. Simply fill out our servey and find a match. Enjoy!

Stranger Match is a questionnaire powered by node and express. Node is our server expressjs and is our middleware which handles our data parsing. 

    server.js

 Simply requiring only express.js as our only dependence makes our server pretty basic. We inigitate express with declaring it as app. 

    app.use(express.urlencoded({ extended: true }))

set up express as our body-parser

    app.use(express.json())

parses our incoming requests with JSON payloads

We then have Two routes we define. Our HTML pages and our APIs.
HTML simply has our Home page and our Survey page. The Survey page is where the party begins. Users are prompted to answer a survey in order to meet an online stranger. If the user enters their responses fully and pass validation, the survey form is submit. Now that we have complete user information we can compair that data to the data of our collected users.

    apiRoutes.js

This file is where our app gathers our data from our form and from our stored data (Strangers.js). Our Users score is then compaired to our stored scores and returns a compatiable match. 

Finally a footstrap modal pops up to display your match!
Currently the server will only take in one submit.

Futur Features:

* Send a wave to matched Stranger.
* Write New Users in DB to be stored.

I hope yall enjoy! Feel free to play around with it. 
