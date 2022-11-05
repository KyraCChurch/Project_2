const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, readyToEat } = this.props.spell
    return (
      <Default title={`${name} Edit Page`} spell={this.props.spell}>
        <form method='POST' action={`/spells/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Ingredients: <input type='text' name='color' defaultValue={color} /><br />
          Instructions: <input type='checkbox' name='readyToEat' defaultChecked={readyToEat} /> <br />
          <input type='submit' value='Edit Spell' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit