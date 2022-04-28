// Place your server entry point code here
// Define app using express
var express = require("express")
var app = express()
// Require md5 MODULE
//var md5 = require("md5")
// Make Express use its own built-in body parser to handle JSON
app.use(express.json());


const args = require("minimist")(process.argv.slice(2))

// See what is stored in the object produced by minimist
console.log(args)
// Store help text 
const help = (`
server.js [options]

--port	Set the port number for the server to listen on. Must be an integer
            between 1 and 65535.

--debug	If set to true, creates endlpoints /app/log/access/ which returns
            a JSON access log from the database and /app/error which throws 
            an error with the message "Error test successful." Defaults to 
            false.

--log		If set to false, no log files are written. Defaults to true.
            Logs are always written to database.

--help	Return this message and exit.
`)
// If --help or -h, echo help text to STDOUT and exit
if (args.help || args.h) {
    console.log(help)
    process.exit(0)
}

// Define allowed argument name 'port'.
args["port"]

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const port = args.port || process.env.port || 5555



// Server port
// Start server
const server = app.listen(port, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",port))
});

app.use(express.static('./public'));