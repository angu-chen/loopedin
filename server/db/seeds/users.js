/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {
      id: 1,
      auth_id: 'auth0|65fa31c9a0b9b10012d4b9f1',
      username: 'alex.loop',
      fullname: 'Alex Johnson',
      location: 'New York, USA',
      img: '/img/users/alex.svg',
    },
    {
      id: 2,
      auth_id: 'auth0|65fa31d8b3d2a20013e5c6f2',
      username: 'sara.w',
      fullname: 'Sara Williams',
      location: 'London, UK',
      img: '/img/users/sara.svg',
    },
    {
      id: 3,
      auth_id: 'auth0|65fa31e7cc1b930014a7d3e3',
      username: 'lee.ch',
      fullname: 'Lee Chen',
      location: 'Singapore',
      img: '/img/users/lee.svg',
    },
    {
      id: 4,
      auth_id: 'auth0|65fa31f6de2c440015b8e4f4',
      username: 'mariah.g',
      fullname: 'Mariah Gomez',
      location: 'Madrid, Spain',
      img: '/img/users/mariah.svg',
    },
    {
      id: 5,
      auth_id: 'auth0|65fa3205ef3d550016c9f505',
      username: 'david.k',
      fullname: 'David Kim',
      location: 'Seoul, South Korea',
    },
    {
      id: 6,
      auth_id: 'auth0|65fa3214f04e660017da0616',
      username: 'nina.codes',
      fullname: 'Nina Patel',
      location: 'Toronto, Canada',
      img: '/img/users/nina.svg',
    },
  ])
}
