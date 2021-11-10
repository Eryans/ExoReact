import React from "react";
import User from "./User";
import Light from "./Light"
import ToDoList from "./ToDoList"

// USERS DATA 
let user = {
    firstname: "Thomas",
    lastname: "Gossart",
    age: 29,
    job: "Formateur",
    hobby: "Le vélo",
    description: "Lorem ipsum"
  }

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<main>
            <User firstName={user.firstname} lastName={user.lastname} age={user.age} job={user.job} hobby={user.hobby} description={user.description}/>
            <Light />
            <ToDoList />
        </main>)
    }
}

export default Main