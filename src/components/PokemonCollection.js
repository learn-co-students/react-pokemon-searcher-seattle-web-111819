import React from 'react'
import { Fragment } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  mapPokemon = () => {
    return this.props.pokemon.map(pokemon => {
      return (
      <Fragment>
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
      </Fragment>
      )
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.mapPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
