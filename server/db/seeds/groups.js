/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('groups').del()
  await knex('groups').insert([
    {
      id: 1,
      name: 'LoopedIn Developers',
      created_by_user_id: 1,
    },
    {
      id: 2,
      name: 'Creative Designers',
      created_by_user_id: 4,
    },
    {
      id: 3,
      name: 'Asia Tech Circle',
      created_by_user_id: 3,
    },
    {
      id: 4,
      name: 'Newcomers Hub',
      created_by_user_id: 6,
    },
  ])
}
