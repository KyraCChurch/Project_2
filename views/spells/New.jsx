const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Spell'>
        <form method='POST' action='/spells'>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Color: <input type='text' name='color' defaultValue={color} /><br />
          Is Ready To Eat: <input type='checkbox' name='readyToEat' defaultChecked={readyToEat} /> <br />
          <input type='submit' value='Edit Spell' />
        </form>
      </Default>
    )
  }
}

module.exports = New
