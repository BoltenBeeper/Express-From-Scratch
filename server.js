console.log('"server.js" script running...')

const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("home", {name: "Beebs"})
})

app.listen(3000)