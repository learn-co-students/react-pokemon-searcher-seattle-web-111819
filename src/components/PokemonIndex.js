import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {


  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({ 
      pokemon: data,
    }))
  }

  addPokemon = pokemon => {
    console.log(pokemon)
    this.setState({
      pokemon: [...this.state.pokemon, pokemon],
    })  
  }

  handleSearchChange = e => {
    this.setState(
      {
        search: e.target.value
      }
    )
  }


  render() {
    const desiredPokemon = this.state.pokemon.filter(p =>
      p.name.includes(this.state.search)
    )
    

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onAddPokemon={this.addPokemon} />
        <br />
        <Search onChange={e => this.handleSearchChange(e)} />
        <br />
        <PokemonCollection pokemon={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
