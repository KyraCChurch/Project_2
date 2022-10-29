const React = require('react')

class New extends React.Component {
  render () {
    return (
      <Default title='Add Grocery Item'>
        <form method='POST' action='/products'>
          Name: <input type='text' name='product' placeholder='Item' /><br />
          Color: <input type='text' name='color' placeholder='Isle Number' /><br />
          Is Ready To Eat: <input type='checkbox' name='InBasket' /><br />
          <input type='submit' value='Add Item' />
        </form>
      </Default>
    )
  }
}

module.exports = New