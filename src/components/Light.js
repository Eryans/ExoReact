import React  from 'react';
import "../styles/Light.css"


export default class Light extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggleLight : true,
        };
        this.toggleLightEvent = this.toggleLightEvent.bind(this);
    }
    toggleLightEvent(){
        console.log("click");
        this.setState( state => ({
            toggleLight : !state.toggleLight
        }));
    }
    render() {
        return (
            <div>
            <button onClick={this.toggleLightEvent}>Light</button>
            <div className={this.state.toggleLight ? "light-on" : "light-off"}/>
            </div>
        )
    }
}
