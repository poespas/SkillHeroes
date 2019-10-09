'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Game', (faker) => {
    return {
        name: faker.word() + faker.word() + faker.word(), // 3 words
        image: `https://picsum.photos/seed/${faker.integer({min: 1, max: 20})}/200/300`,
        price: faker.integer({ min: 50, max: 10000 }) / 100, // devided by 100 so it becomes a valid price
        type: faker.word(),

        minPlayers: faker.integer({ min: 1, max: 50 }),
        maxPlayers: faker.integer({ min: 50, max: 100 }),

        minAge: faker.integer({ min: 1, max: 12 }),
        maxAge: faker.integer({ min: 12, max: 50 }),

        duration: faker.integer({ min: 5, max: 120 })
    }
})
