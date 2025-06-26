 // singleton 

 // object literals

 const mySym = Symbol("key1")

 const jsUser = {
    name: "krish",
    "full name": "krish passey",
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    ElementInternals: "krish@google.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "saturday"]
 }

 console.log(jsUser.email)
 console.log(jsUser["email"])
 console.log(jsUser["full name"])
 console.log(jsUser[mySym])


 jsUser.email = "krish@google.com"
 Object.freeze(jsUser)
 jsUser.email = "krish@google.com"
 console.log(jsUser);


 jsUser.greeting = function(){
    console.log("hello js user")
 }

 console.log(jsUser.greeting())