const db = require('./db')
const Spell = require('./spell')

const starterSpells = [
  {
    name: 'Love Spell', ingredients: 'none', instructions: 'Be Perfect, then they will love you'
  },
  {
    name: 'Getting an F', ingredients: 'A Single Pear', instructions: 'Mail the pear to your teacher with a note saying "An apple a day keeps the doctor away, what about a pear?"'
  },
  {

    name: 'Flying', ingredients: '1 red grape, 1 green grape', instructions: 'Eat both grapes at once on a 2 story building on a full moon and go for it.'
  },
  {

    name: 'Making friends', ingredients: 'a life', instructions: 'Go outside and do something.'
  }
]

Spell.deleteMany({})
  .then(() => {
    Spell.create(starterSpells)
      .then((createdSpells) => {
        console.log('created spells:', createdSpells)
        db.close()
      })
      .catch(err => {
        console.log(err)
        db.close()
      })
  }).catch(err => {
    console.log(err)
    db.close()
  })
