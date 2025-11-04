/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
   {
      id: 1,
      auth_id: 201,
      username: "alex.loop",
      fullname: "Alex Johnson",
      location: "New York, USA",
      img: "/img/users/alex.jpg"
    },
    {
      id: 2,
      auth_id": 202,
      "username": "sara.w",
      "fullname": "Sara Williams",
      "location": "London, UK",
      "img": "/img/users/sara.jpg"
    },
    {
      id: 3,
      auth_id: 203,
      username: "lee.ch",
      fullname: "Lee Chen",
      location: "Singapore",
      img: "/img/users/lee.jpg"
    },
    {
      id: 4,
      auth_id: 204,
      username: "mariah.g",
      fullname: "Mariah Gomez",
      location: "Madrid, Spain",
      img: "/img/users/mariah.jpg"
    },
    {
      id: 5,
      auth_id: 205,
      username: "david.k",
      fullname: "David Kim",
      location: "Seoul, South Korea",
      img: "/img/users/david.jpg"
    },
    {
      id: 6,
      auth_id: 206,
      username: "nina.codes",
      fullname: "Nina Patel",
      location: "Toronto, Canada",
      img: "/img/users/nina.jpg"
    }
  ]);
};
