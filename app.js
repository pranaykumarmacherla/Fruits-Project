//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");




const Fruit = new mongoose.model("Fruit",{
    name : {
        type : String,
        required: [true, "No name specified!"]
    },
    rating:{
       type: Number,
       min: 1,
       max:10
    } ,
    review: String
});

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Good"
});

// fruit.save().then(function (){
    // console.log("Sweet!");
// });


const Person = new mongoose.model("Person",{
    name: String,
    age: Number
});

const person = new Person({
    name: "John",
    age: 26
});

// person.save().then(function (){
    // console.log("Great!");
// });


Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});