console.log('"server.js" script running...')

const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public")) // Allows viewing of static HTML pages (stored in the public folder)
// app.use(express.static(path.join(__dirname, "public"))) // Aparently this ensures public file serving works across different operating systems. Not necessary for my use case but included just in case. (Including "path require line)").
// app.use(express.static(path.join(__dirname, "private")))
app.use(express.static("private"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine", "ejs") // Allows viewing of dynamic EJS pages (stored in the views folder)

app.use(logUrl)

app.get("/", (req, res) => {
  res.render("home", {name: "Beebs"})
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logUrl(req, res, next) {
  console.log(`Visited: ${req.originalUrl}`)
  next()
}

app.listen(3000)