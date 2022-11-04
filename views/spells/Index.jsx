const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { spells } = this.props
    return (
      <Default title='Spells Index Page'>
        <ul>
          {
                        spells.map((spell) => {
                          const { name, color, readyToEat } = spell
                          return (
                            <li key={spell._id}>
                              <a href={`/spells/${spell._id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        readyToEat
                                          ? 'It\'s ready to eat'
                                          : 'It\'s not ready to eat'
                                    }
                              <br />
                              <form method='POST' action={`/spells/${spell._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
