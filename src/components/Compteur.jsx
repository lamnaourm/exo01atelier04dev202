import React, { Component } from 'react'
import Valeur from './Valeur';

export default class Compteur extends Component {
    state = {
        compteur: 0
    }

    incrementer = (e) => {
        e.preventDefault();
        this.setState({ compteur: this.state.compteur + 1 })
    }

    decrementer = (e) => {
        e.preventDefault();
        this.setState({ compteur: this.state.compteur - 1 })
    }

    initialiser = (e) => {
        e.preventDefault();
        this.setState({ compteur: 0 });
    }

    render() {
        return (
            <div>
                <Valeur valeur={this.state.compteur} />
                <button onClick={this.incrementer}>Incrémenter</button>
                <button onClick={this.decrementer}>Decrémenter</button>
                <button onClick={this.initialiser}>Initialiser</button>
            </div>
        )
    }
}
