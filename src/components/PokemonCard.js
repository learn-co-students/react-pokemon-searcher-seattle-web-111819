import React from 'react'
import { Card } from 'semantic-ui-react'

// Converted to a functional component
const PokemonCard = props => {
  let {name, hp, front, back, showBack} = props.poke

  const handleClickPoke = () => props.onClickPoke(props.poke)

  return (
    <Card>
      <div onClick={handleClickPoke}>
        <div className="image">
          {/* Simple ternary to check which image to use */}
          <img src={showBack ? back : front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard