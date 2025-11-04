/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    {
      id: 1,
      user_id: 1,
      text: 'Excited to finally join LoopedIn! Can’t wait to connect with other devs 🚀',
      created_at: '2025-10-30T08:15:00Z',
    },
    {
      id: 2,
      user_id: 2,
      text: 'Redesigning my portfolio — less clutter, more clarity ✨ #designlife',
      created_at: '2025-10-31T10:45:00Z',
    },
    {
      id: 3,
      user_id: 3,
      text: 'Started building a LoopedIn API client in Python today 👨‍💻',
      created_at: '2025-11-01T14:20:00Z',
    },
    {
      id: 4,
      user_id: 4,
      text: 'Hosting a virtual design jam this weekend! DM me if you want to join 🎨',
      created_at: '2025-11-02T18:10:00Z',
    },
    {
      id: 5,
      user_id: 5,
      text: 'Just wrapped up a 3-month refactor. Clean code = happy brain 🧠',
      created_at: '2025-11-03T21:00:00Z',
    },
    {
      id: 6,
      user_id: 6,
      text: 'First post here! What’s everyone working on this week?',
      created_at: '2025-11-04T09:00:00Z',
    },
    {
      id: 7,
      user_id: 1,
      text: 'Anyone else addicted to dark mode? 🌙 #loopedInThoughts',
      created_at: '2025-11-05T07:45:00Z',
    },
  ])
}
