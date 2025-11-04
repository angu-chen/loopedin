/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.integer('auth_id')
    table.string('username')
    table.string('fullname')
    table.string('location')
    table.string('img')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('user')
}
