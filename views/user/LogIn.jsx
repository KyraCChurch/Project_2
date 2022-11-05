const React = require('react')
const Default = require('../layouts/Default')

class Login extends React.Component {
  render () {
    return (
      <Default title='Login to Spellbook Account'>
        <form action='/user/logIn' method='POST'>
          <fieldset>
            <legend>User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Login Account' />
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = Login
