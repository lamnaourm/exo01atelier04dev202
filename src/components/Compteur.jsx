import React, { Component } from 'react'
import Valeur from './Valeur';

export default class Compteur extends Component {
    state = {
        compteur: 0,
        pasI:1,
        pasD:1
    }

    incrementer = (e) => {
        e.preventDefault();
        this.setState({ compteur: this.state.compteur + this.state.pasI })
    }

    decrementer = (e) => {
        e.preventDefault();
        this.setState({ compteur: this.state.compteur - this.state.pasD })
    }

    initialiser = (e) => {
        e.preventDefault();
        this.setState({ compteur: 0 });
    }

    render() {
        return (
            <div>
                <Valeur valeur={this.state.compteur} />
                <div className='btn'>
                    <button onClick={this.incrementer}>Incrémenter</button>
                    <button onClick={this.decrementer}>Decrémenter</button>
                    <button onClick={this.initialiser}>Initialiser</button>
                </div>

                <fieldset>
                    <legend>Pas d'incrémentation</legend>
                    <button onClick={() => {this.setState({pasI: 1})}}>1</button>
                    <button onClick={() => {this.setState({pasI: 2})}}>2</button>
                    <button onClick={() => {this.setState({pasI: 3})}}>3</button>
                    <button onClick={() => {this.setState({pasI: 4})}}>4</button>
                </fieldset>

                <fieldset>
                    <legend>Pas de décrémentation</legend>
                    <button onClick={() => {this.setState({pasD: 1})}}>1</button>
                    <button onClick={() => {this.setState({pasD: 2})}}>2</button>
                    <button onClick={() => {this.setState({pasD: 3})}}>3</button>
                    <button onClick={() => {this.setState({pasD: 4})}}>4</button>
                </fieldset>
            </div>
        )
    }
}
