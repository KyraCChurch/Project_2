const React = require('react')

class Default extends React.Component {
  render () {
    const {spell, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/spells'>Go to My Spellbook</a><br />
            <a href='/spells/new'>Create a New Spell</a><br />
            {spell ? <a href={`/spells/${spell._id}/edit`}> {spell.name} Edit Page </a> : ''}<br />
            {spell ? <a href={`/spells/${spell._id}`}>{spell.name} Show Page</a> : ''}<br />
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default

