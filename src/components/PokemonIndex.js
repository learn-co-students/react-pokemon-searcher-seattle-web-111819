import React, {Component} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonIndex extends Component {

  state = {
    pokes: [],
    search: ''
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
        .then(data => this.setState({pokes: data.map(poke => ({
          id: poke.id,
          name: poke.name,
          hp: poke.stats.find(stat => stat.name === "hp").value,
          front: poke.sprites.front,
          back: poke.sprites.back,
          showBack: false
        }))}))}

  onClickPoke = clicked => 
    this.setState(prev => 
      ({pokes: prev.pokes.map(poke => 
        clicked.id === poke.id ? {...poke, showBack: !poke.showBack} : poke )}))

  onSubmitPoke = added => {
    // Still need to do a POST fetch...
    // But that API structure... oh, man...
    console.log("Still need to do a POST fetch...")
    this.setState(prev => ({pokes: [...prev.pokes, added]}))
  }

  onChangeSearch = search => this.setState({search: search})

  filterPokes = () => this.state.pokes.filter(poke => poke.name.includes(this.state.search))

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onSubmitPoke={this.onSubmitPoke}/>
        <br />
        <Search 
          search={this.state.search} 
          onChangeSearch={this.onChangeSearch} 
        />
        <br />
        <PokemonCollection 
          pokes={this.filterPokes()}
          onClickPoke={this.onClickPoke}
        />
      </Container>
    )
  }
}

export default PokemonIndex