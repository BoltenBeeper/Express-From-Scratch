console.log('"server.js" script running...')

const express = require("express")
const app = express()
const fs = require("fs").promises
const path = require("path")

app.use(express.static("public")) // Allows viewing of static HTML pages (stored in the public folder)
// app.use(express.static(path.join(__dirname, "public"))) // Aparently this ensures public file serving works across different operating systems. Not necessary for my use case but included just in case. (Including "path require line)").
// app.use(express.static(path.join(__dirname, "private")))
app.use(express.static("private"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine", "ejs") // Allows viewing of dynamic EJS pages (stored in the views folder)

app.use(logUrl)

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.get("/", getUsers, async (req, res) => {
  // res.render("home", {name: "Beebs"})
  res.render("users/users_list", {users_list: req.users})
})

function logUrl(req, res, next) {
  console.log(`Visited: ${req.originalUrl}`)
  next()
}

async function getUsers(req, res, next) {
  try {
      req.users = await fs.readFile(path.join(__dirname, "private", "users.json"), "utf8")
      next()
  } catch (err) {
      console.error(err)
      res.status(500).send("Error reading data")
      next()
  }
}

app.listen(3000)