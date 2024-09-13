const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(JSON.stringify({users}, null, 4))//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  const email = req.params.email;
  // Find the user by email
  const user = users.filter(u => u.email === email);

  if (user) {
    res.json(user); // Send the user data as the response
  } else {
    res.status(404).send("User not found\n"); // Return 404 if the user doesn't exist
  }
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  users.push(req.query);  

  res.send(users);//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  email=req.params.email;
  data=req.query

  user = users.find(u => u.email === email)
  
  if(user){
    data.firstName? user.firstName = data.firstName:null;
    data.lastName? user.lastName = data.lastName:null;
    data.DOB? user.DOB = data.DOB:null;
    res.send(["user updated",user]);
  }else{
    res.send("user not found");
  }

  res.send()//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  email = req.params.email;
  index = users.findIndex(user => user.email === email);
  
  if(index !== -1){
    const removedUser = users.splice(index,1);
    res.send(`user with email ${email} removed\n`);
  }else{
    message = `user with email ${email} not found!\n`;
    res.send(message)//This line is to be replaced with actual return value
  }
});

module.exports=router;
