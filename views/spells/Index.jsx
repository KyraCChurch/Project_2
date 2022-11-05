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
                          const { name, ingredients, instructions } = spell
                          return (
                            <li key={spell._id}>
                              <a href={`/spells/${spell._id}`}>
                                {name}
                              </a> is made with {ingredients}

                              <br />
                              {
                                        instructions
                                    }
                              <br />
                              <form method='POST' action={`/spells/${spell._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${name}`} />
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
