'use strict'

/*
|--------------------------------------------------------------------------
| GameSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class GameSeeder {
  async run () {
    /* Make  25 products */
    for (let i = 0; i < 25; i++) {
      const game = await Factory.model('App/Models/Game').create()

    }
    
  }
}

module.exports = GameSeeder
