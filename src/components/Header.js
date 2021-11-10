import React from "react";
import Logo from "../logo.svg";
import "../styles/Header.css"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="bg-primary text-white p-2">
        <section className="header-brd d-flex flex-row justify-content-end ">
            <img src={Logo} alt="Logo" height={120}/>
            <h1 className="align-self-center">{this.props.title}</h1>
        </section>
        <p>Site regroupant des exercices réalisés dans le but d'un apprentisage de React</p>
      </header>
    );
  }
}
