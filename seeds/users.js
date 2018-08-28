
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Spiderman', email: 'webs@webby.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVenbHVd6xwubCu-HvLLJmexP--ToC2YbkO_O0xPJkkQeRmSQB', saved_stories: '', saved_avatar: ''},
        {id: 2, username: 'Gwen Stacey', email: 'webbs@webby.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ICNHH4lQPPOKCyFjumYT7k5DGMLA0qZvkMOc962gUBmpqAAD', saved_stories: '', saved_avatar: ''},
        {id: 3, username: 'FenFen', email: 'FenFen@ix.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpqxDxkKon6I7lEKlUUATkrnhkXAkmbbcKayNQc4i3XZnXUsA', saved_stories: '', saved_avatar: ''},
        {id: 4, username: 'SofSof', email: 'Sofla@stuff.com', avatar: 'https://i.ytimg.com/vi/I7jgu-8scIA/maxresdefault.jpg', saved_stories: '', saved_avatar: ''}
      ]);
    });
};
