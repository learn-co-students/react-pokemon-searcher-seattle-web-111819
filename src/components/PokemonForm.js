import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = this.getInitialState()
  }

  getInitialState = () => ({ name: '', hp: '', frontUrl: '', backUrl: '' })

  handleSubmit = e => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    }).then(res => res.json()).then(data => this.props.onAddPokemon(data))
    this.setState(this.getInitialState())
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={e =>this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" value={this.state.name} placeholder="Name" name="name" onChange={e => this.handleChange(e)} />
            <Form.Input fluid label="hp" value={this.state.hp} placeholder="hp" name="hp" onChange={e => this.handleChange(e)} />
            <Form.Input fluid label="Front Image URL" value={this.state.frontUrl} placeholder="url" name="frontUrl" onChange={e => this.handleChange(e)} />
            <Form.Input fluid label="Back Image URL" value={this.state.backUrl} placeholder="url" name="backUrl" onChange={e => this.handleChange(e)} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
