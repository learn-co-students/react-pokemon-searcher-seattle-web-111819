import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
    

  constructor(){
    super()
    this.state = {
      clicked: false 
    }
  }

  findHp = statName => {
    const stat = this.props.pokemon.stats.filter(stat => stat.name === statName)
    return stat[0].value 
  }

  toggleImage = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }



  render() {
    let { name, sprites } = this.props.pokemon
    let image = this.state.clicked ? sprites.back : sprites.front


    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.toggleImage()}>
            <img src={image} alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp("hp")} HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
