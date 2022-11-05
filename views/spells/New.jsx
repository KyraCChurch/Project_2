const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Spell'>
        <form method='POST' action='/spells'>
          Name: <input type='text' name='name' /><br />
          Ingredients: <input type='text' name='ingredients' /><br />
          Instructions: <input type='text' name='instructions' /> <br />
          <input type='submit' value='Edit Spell' />
        </form>
      </Default>
    )
  }
}

module.exports = New
