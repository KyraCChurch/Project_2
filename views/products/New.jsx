const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Add Grocery Item'>
        <form method='POST' action='/products'>
          Product: <input type='text' name='product' placeholder='Item' /><br />
          Isle Number: <input type='text' name='isleNum' placeholder='Isle Number' /><br />
          Is In The Basket: <input type='checkbox' name='InBasket' /><br />
          <input type='submit' value='Add Item' />
        </form>
      </Default>
    )
  }
}

module.exports = New