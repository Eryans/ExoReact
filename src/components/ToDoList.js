import React from 'react'

export default class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
        this.toDoArr = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            input : e.target.value
        })
    }
    handleClick(e){
        e.preventDefault();
        this.setState({
            input : e.target.value
        })
        this.toDoArr.push(this.state.input);
        console.log(this.toDoArr);
    }
    render() {
        return (
            <div>
                <form >
                <input type="text" onChange={this.handleChange} value={this.state.input}/>
                <button type="submit" onClick={this.handleClick}>Submit</button>
                <ul>
                    {this.toDoArr.map((x,i) => <li key={i}>{x}</li>)}
                </ul>
                </form>
            </div>
        )
    }
}
