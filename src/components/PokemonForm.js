import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends Component {

  state = {
    name: '',
    hp: '',
    front: '',
    back: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})
  handleSubmit = e => {
    e.preventDefault()
    let {name, hp, front, back} = this.state
    // Maybe some error correction on incomplete values here?
    this.props.onSubmitPoke({
      name: name,
      hp: hp,
      front: front,
      back: back,
      showBack: false
    })
    this.setState({name: '', hp: '', front: '', back: ''})
  }

  render() {
    let {name, hp, front, back} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleChange} 
              value={name} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleChange} 
              value={hp} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleChange} 
              value={front} label="Front Image URL" placeholder="url" name="front" />
            <Form.Input fluid onChange={this.handleChange} 
              value={back} label="Back Image URL" placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm