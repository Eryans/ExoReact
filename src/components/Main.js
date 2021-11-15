import React from "react";
import User from "./User";
import Light from "./Light"
import ToDoList from "./ToDoList"

// USERS DATA 
let user = [{
    firstname: "Thomas",
    lastname: "Gossart",
    age: 29,
    job: "Formateur",
    hobby: "Le vélo",
    description: "Lorem ipsum"
  },
  {
    firstname: "Jules",
    lastname: "Noir--Vermeulen",
    age: 26,
    job: "En Formation Web Dev",
    hobby: "La musique",
    description: "Grand Chef cuisinier de sa bande de pote"
  }]

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<main className="">
            <div className="user-container">
            {user.map(user => <User firstName={user.firstname} lastName={user.lastname} age={user.age} job={user.job} hobby={user.hobby} description={user.description}/>)}
            </div>
            <Light />
            <ToDoList />
        </main>)
    }
}

export default Main