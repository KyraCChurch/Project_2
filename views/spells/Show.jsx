const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, readyToEat, _id } = this.props.spell
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} spell={this.props.spell}>
        <p>{capName} is {color} and {readyToEat ? 'it\'s ready to eat' : 'it\'s not ready to eat'}</p>
      </Default>
    )
  }
}

module.exports = Show
