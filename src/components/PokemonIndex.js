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
        // Building pokemon from the strange API structure
        .then(data => this.setState({pokes: data.map(poke => ({
          id: poke.id,
          name: poke.name,
          hp: poke.stats.find(stat => stat.name === "hp").value,
          front: poke.sprites.front,
          back: poke.sprites.back,
          // Adding in a toggle for which img is shown
          showBack: false
        }))}))}
  
  onClickPoke = clicked => 
    this.setState(prev => 
      // Map over pokemon
      ({pokes: prev.pokes.map(poke => 
        // Find the one clicked, then toggle the 'showBack' attribute
        clicked.id === poke.id ? {...poke, showBack: !poke.showBack} : poke )}))

  onSubmitPoke = add => 
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      // Recreating the strange API structure for the POST
      body: JSON.stringify({
        name: add.name,
        stats: [{name: "hp", value: add.hp}],
        sprites: {front: add.front, back: add.back}
    })})
      .then(r => r.json())
      // Once the POST goes through, add the pokemon (with new ID) to the state
      .then(data => this.setState(prev => ({pokes: [...prev.pokes, {...add, id: data.id}]})))

  // Callback stores the search input value in state
  onChangeSearch = search => this.setState({search: search})

  // Filters on-the-fly with a substring check of the search term stored in state
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