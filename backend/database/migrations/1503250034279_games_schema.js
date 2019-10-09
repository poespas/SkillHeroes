'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('games', (table) => {
      table.increments()
      table.string('name', 265).notNullable().unique()
      table.string('image').notNullable()
      table.string('type', 16)
      table.float('price', 16).notNullable()
      
      table.integer('minPlayers', 16).notNullable()
      table.integer('maxPlayers', 16).notNullable()
      
      table.integer('minAge', 16).notNullable()
      table.integer('maxAge', 16).notNullable()
      
      table.integer('duration', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('games')
  }
}

module.exports = UserSchema
