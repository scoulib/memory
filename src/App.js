import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'
import './App.css'
import PropTypes from 'prop-types'
import Card from './Card'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import GuessCount from './GuessCount'

const  user=[
    {id:1,name:'Alice'},
    {id:2,name:'Bob'},
    {id:3,name:'Clair'},
    {id:4,name:'David'}
  ]
const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
// const Greeter = ({ whom })=>(
//   <button onClick={()=>(console.log(`Bonjour ${whom}`))}>
// click moi !
// </button>)
class App extends Component {

  cards= this.generateCards()
  handleCardClick=card=> {

    console.log(card, 'clicked',this)

  }


  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
}


  render() {
    const  won = new Date().getSeconds() % 2 === 0
    return (

      <div className="memory">

        <GuessCount guesses={0} />
        {this.cards.map((card,index)=>(
          <Card card={card} feedback="visible" key={index} onClick={this.handleCardClick}/>
        ))}
        { won && <HallOfFame entries= {FAKE_HOF}/> }
      </div>


    )

  }

}
export default App
