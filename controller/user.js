import User from "../model/user.js"

export const creatUser = (req, res, next) => {
  const userInfo =  {
        name: "dyaa",
        email: "dya@gmail.com",
        age: 24,
        password: "12345678",
    };
    const user = new  User(userInfo);
    user
     .save()
     .then(() => {
        console.log("User created successfuly"); 
     })
     .catch(() => {
        console.log("Somthing went wrong")
     });

};

