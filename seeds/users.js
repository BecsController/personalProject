
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Spiderman', email: 'webs@webby.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVenbHVd6xwubCu-HvLLJmexP--ToC2YbkO_O0xPJkkQeRmSQB'},
        {id: 2, name: 'Gwen Stacey', email: 'webbs@webby.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ICNHH4lQPPOKCyFjumYT7k5DGMLA0qZvkMOc962gUBmpqAAD'},
        {id: 3, name: 'FenFen', email: 'FenFen@ix.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpqxDxkKon6I7lEKlUUATkrnhkXAkmbbcKayNQc4i3XZnXUsA'}
      ]);
    });
};
