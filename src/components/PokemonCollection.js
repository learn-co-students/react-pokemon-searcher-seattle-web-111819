import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = props => {

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
