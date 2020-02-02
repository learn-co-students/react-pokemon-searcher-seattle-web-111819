import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

// Converted this to a functional component
const PokemonCollection = props => {

  // Building Poke cards with keys
  const showCards = () => props.pokes.map(poke => 
      <PokemonCard 
        key={poke.id}
        poke={poke} 
        onClickPoke={props.onClickPoke}
      />)

  return (
    <Card.Group itemsPerRow={6}>
      {showCards()}
    </Card.Group>
  )
}

export default PokemonCollection
