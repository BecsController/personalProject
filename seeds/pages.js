
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pages').del()
    .then(function () {
      // Inserts seed entries
      return knex('pages').insert([
        {id: 1, title: 'Beginnings', background: '/images/backgrounds/house.jpeg', population: '/images/parents.jpeg', emotionOne: 'I am feeling Anxious', emotionTwo: 'I am feeling Excited', emotionThree: 'I am feeling Scared', pageText: "It\'s the first day of school. It\'s time to get ready to go.\n Your parents say, 'Do you remember why it\'s important to go to school?'", optionOne: 'Reply, ""', optionTwo: 'Reply, ""', story_id: 1},
        {id: 2, title: 'Getting Ready', background: '/images/backgrounds/house.jpeg', population: '', emotionOne: 'I am feeling Anxious', emotionTwo: 'I am feeling Excited', emotionThree: 'I am feeling Scared', pageText: "You have been left alone in your room.  Now what shall you do?", optionOne: 'Reply, ""', optionTwo: 'Reply, ""', story_id: 1},
        {id: 3, title: 'The Classroom', background: '/images/backgrounds/inside-a-kindergarten-classroom-background.jpg', population: '/images/teacher.jpeg', emotionOne: 'I am feeling Anxious', emotionT0wo: 'I am feeling Excited', emotionThree: 'I am feeling Scared', pageText: 'In the classroom, your teacher comes over to introduce herself. \n Hi, I\'m Miss Davis, what\'s your name? \n She holds out her hand.', optionOne: 'Reply, ""', optionTwo: 'Reply, ""', story_id: 1}
      ]);
    });
};
