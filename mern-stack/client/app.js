import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('/cards', req)
      .then(res => res.ok && res.json())
      .then(data => this.setState({ cards: data }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h1>Your database flashcards.</h1>
        <ul className="list-style bullet-none">
          { this.state.cards.map(card => 
            <li key={ card.id } className="list-item fixed-width-500 mb-5">
              <div className="card">
                <div className="card-body">
                  <h4>{ card.question }</h4>
                  <div>{ card.answer }</div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}