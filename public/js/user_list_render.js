console.log("User List script connected!")

const userListDiv = document.getElementById("user-list-container")
usersList = JSON.parse(userListDiv.dataset.usersList)


console.log(usersList)
for (i in usersList) {
  // `<li><a href="/users/${usersList[i]}">${usersList[i]}</a></li>`
  let newListItem = document.createElement("li")
  newListItem.innerHTML = `${JSON.stringify(usersList[i].id)}. `
  let newLink = document.createElement("a")
  newLink.href = `/users/${i}`
  newLink.innerHTML = `${JSON.stringify(usersList[i].username)}`
  newListItem.appendChild(newLink)
  userListDiv.appendChild(newListItem)
  console.log(usersList[i])
}