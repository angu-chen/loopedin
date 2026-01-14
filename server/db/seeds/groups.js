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
      description:
        'A community for coders, builders, and tech enthusiasts to share projects, troubleshoot code, and stay ahead of the curve.',
      created_by_user_id: 1,
    },
    {
      id: 2,
      name: 'Creative Designers',
      description:
        'Where imagination meets design. Connect with artists, UI/UX pros, and creative minds to inspire and be inspired.',
      created_by_user_id: 4,
    },
    {
      id: 3,
      name: 'Asia Tech Circle',
      description:
        'Join tech innovators and entrepreneurs across Asia discussing trends, startups, and the future of digital innovation.',
      created_by_user_id: 3,
    },
    {
      id: 4,
      name: 'Newcomers Hub',
      description:
        'New here? This is your place to connect, ask questions, and find your footing in the community. Everyone’s welcome!',
      created_by_user_id: 6,
    },
  ])
}
