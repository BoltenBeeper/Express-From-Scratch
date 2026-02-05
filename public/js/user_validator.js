console.log("User validation script connected!")

async function getAllUserData() {
  try {
    const response = await fetch("../users.json")

    if (!response.ok) {
      return "Error: Response not ok."
    }
    
    const data = await response.json()
    return (data)

  } catch {
    return "Error: user_validator.js could not reach JSON data."
  }
}

export default getAllUserData

// EXAMPLES of how to call this function:

// async function example() {
//   const data = await getAllUserData()
//   console.log(data)
// }
// example()

// getAllUserData().then((data) => {
//   console.log(data)
// })