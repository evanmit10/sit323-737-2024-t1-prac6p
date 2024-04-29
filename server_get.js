const express= require("express");
const res = require("express/lib/response");
const app= express();
app.use(express.json()); //the codes above are all part of the express package after installation and needs to be used because its a java express app. The code on this line is used to parse JSON data from HTTP requests.

const add = (n1, n2) => { return n1 + n2; } //this is used to declare the variable called add which has n1 and n2 as values that would return as a answer from adding both those values
app.get("/add", (req, res) => { //app.get is to get the execution of what the code below would do. The /add in quotation marks would be part of the url when entered and thats what it would set to.
    try { //This will try to get a request from the user by sending to the backend of what the user would input.  It would then catch the input if it has been entered invalidly and would show the error. The try and catch method is implemented to handle errors.
        const n1 = parseFloat(req.query.n1); //this converts to a string and then parses this from the request as a decimal and then returns as a number or a NaN
        const n2 = parseFloat(req.query.n2); //this converts to a string and then parses this from the request as a decimal and then returns as a number or a NaN
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined"); //if the input returns as a NaN it will show this message
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined"); //if the input returns as a NaN it will show this message
        }
        const result = add(n1, n2); //this is used to declare the variable called result which includes another const variable 'add' and the two numbers used to add the two numbers and show the answer
        res.status(200).json({ statuscocde: 200, data: result }); //this part of the code is the status it will show on the webpage if the two numbers entered in the url are valid.  The res.status would set the HTTP status for the response. The number 200 in res.status means its ok by default, meaning no errors.
    } catch (error) {
        console.log(error); //this creates a error message in the console log
        res.status(500).json({ //this part of the code is the status it will show on the webpage if both n1 and n2 or one of them are entered invalidly. The 500 in res.status means that its a internal server error which is why its set to 500 in res.status.
            statuscocde: 500, msg: error.toString() //the error message is set as a string as well as to set statuscode to 500 as its an internal error. 
        })
    } //The codes below have been applied the same as the code above but instead they're subtraction, multiplication and division. 
});

const subtract = (n1, n2) => { return n1 - n2; }
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = subtract(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.toString()
        })
    }
});

const multiply = (n1, n2) => { return n1 * n2; }
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = multiply(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.toString()
        })
    }
});


const divide = (n1, n2) => { return n1 / n2; }
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = divide(n1, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.toString()
        })
    }
});

const port = 3040; //this is used to declare a variable called port and setting it to 3000.
app.listen(port, () => { //this is to make the app listen to port 3000 if its entered in the URL 
    console.log("server is listening on port " + port); //this is to  show in the console log that the server is listening to port 3000 after entering node node.js in the terminal. I put the variable port outside of the quotation marks instead of 3000 in the quotation marks to make the port const being used
});