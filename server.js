console.log('"server.js" script running...')

const express = require("express")
const app = express()

app.use(express.static("public")) // Allows viewing of static HTML pages (stored in the public folder)
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs") // Allows viewing of dynamic EJS pages (stored in the views folder)

app.get("/", (req, res) => {
  res.render("home", {name: "Beebs"})
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000)