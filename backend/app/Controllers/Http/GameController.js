'use strict'

const Database = use('Database')
const Game = use('App/Models/Game')

class GameController {
    async index() {
        return (await Game.all());
    }

    async show({ params }) {
        return (await Game.find(params.id))
    }
}

module.exports = GameController
