import React, { Component } from 'react'

export default class Exemple extends Component {

    state = {
        nom:'',
        prenom:'',
        age:0,
        filiere:'TDI',
        vaccin: true
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        const value = e.target.value;

        this.setState({[name]: type==='checkbox' ? e.target.checked: value})
    }

    render() {

        return (
            <div>
                <form action="" onSubmit={this.handleClick}>
                    <label>
                        Nom :
                        <input name="nom" value={this.state.nom} onChange={this.handleChange} />
                    </label><br />
                    <label>
                        Prenom :
                        <input name="prenom" value={this.state.prenom} onChange={this.handleChange}/>
                    </label><br />
                    <label>
                        Age :
                        <input name="age" value={this.state.age} onChange={this.handleChange}/>
                    </label><br />
                    <label>
                        Filiere :
                        <input name="filiere" type="radio" value="TDI" checked={this.state.filiere==='TDI'} onChange={this.handleChange} /> TDI
                        <input name="filiere" type="radio" value="TRI" checked={this.state.filiere==='TRI'} onChange={this.handleChange}/> TRI
                    </label><br />
                    <label>
                        Vaccine :
                        <input type="checkbox" name="vaccin" checked={this.state.vaccin} onChange={this.handleChange}/>
                    </label><br />

                    <input type="submit" value="Soumettre les donnees" />
                </form>
            </div>
        )
    }
}
