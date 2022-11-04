const db = require('./db')
const Spell = require('./spell')


const starterSpells = [
    {
        name: 'Apple', color: 'red', readyToEat: true,
    },
    {
        name: 'Orange', color: 'orange', readyToEat: true,
    },
    {

        name: 'Coconut', color: 'brown', readyToEat: false,
    },
    {

        name: 'Grapes', color: 'purple', readyToEat: true,
    },
    {

        name: 'Pear', color: 'green', readyToEat: true,
    }
]


Spell.deleteMany({})
    .then(() => {
        Spell.create(starterSpells)
        .then((createdFruits) => {
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
