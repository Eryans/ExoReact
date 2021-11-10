import React from 'react'

export default class User extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section>
                <h2>Bonjour {this.props.firstName} {this.props.lastName}</h2>
                <p>Vous avez {this.props.age} ans, votre métier est {this.props.job}, vous aimez {this.props.hobby}</p>
                <p>{this.props.description}</p>
            </section>
        )
    }
}
