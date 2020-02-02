import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends Component {

  // Changed the variable names to match how they're stored in the Index
  state = {
    name: '',
    hp: '',
    front: '',
    back: ''
  }

  // Controlling the form via state
  handleChange = e => this.setState({[e.target.name]: e.target.value})


  handleSubmit = e => {
    e.preventDefault()
    let {name, hp, front, back} = this.state
    // Validates that each input is filled in
    if (name && hp && front && back) {
      // Builds a pokemon obj and sends it up
      this.props.onSubmitPoke({
        name: name,
        hp: hp,
        front: front,
        back: back,
        showBack: false
      })
      // Clears the form
      this.setState({name: '', hp: '', front: '', back: ''})
    }
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