const express = require("express")
const bodyParser = require("body-parser")
const usersData = require("./users");
 
const app = express()
 
app.set("json spaces", 2)
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
app.get("/", (req, res) => {
  res.send("Hello REST API")
})


app.get("/users", (req, res) => {
  res.send(usersData)
})
 
const PORT = process.env.PORT || 5000 
app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})
