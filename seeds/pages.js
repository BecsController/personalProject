
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pages').del()
    .then(function () {
      // Inserts seed entries
      return knex('pages').insert([
        {id: 1, title: 'Beginnings', background: '/images/backgrounds/house.jpeg', population: '/images/parents.jpeg', emotionOne: 'I am feeling Anxious', emotionTwo: 'I am feeling Excited', emotionThree: 'I am feeling Scared', pageText: `It\'s the first day of school. It\'s time to get ready to go.\n Your parents say, "Do you remember why it\'s important to go to school?"`, optionOne: 'Reply, "I\'m not ready to go to school"', optionTwo: 'Reply, "Yes, I\'m ready to go"', story_id: 1},
        {id: 2, title: 'The Days', background: '/images/backgrounds/house.jpeg', population: '/images/seven-days-of-the-week.jpg', emotionOne: 'I am feeling Anxious', emotionTwo: 'I am feeling Excited', emotionThree: 'I am feeling Scared', pageText: `You remember your parents told you there are days you go to school and ones you don\'t, can you remember which is which?"`, optionOne: 'Reply, "There\'s no school Saturday and Sunday"', optionTwo: 'Reply, "School is every day"', story_id: 1},
        {id: 3, title: 'Getting Ready', background: '/images/backgrounds/house.jpeg', population: '', emotionOne: 'I am feeling Anxious', emotionTwo: 'I am feeling Excited', emotionThree: 'I am feeling Scared', pageText: "You have been left alone in your room.  Now what will you do?", optionOne: 'Reply, ""', optionTwo: 'Reply, ""', story_id: 1},
        {id: 4, title: 'The Classroom', background: '/images/backgrounds/inside-a-kindergarten-classroom-background.jpg', population: '/images/teacher.jpeg', emotionOne: 'I am feeling Anxious', emotionTwo: 'I am feeling Excited', emotionThree: 'I am feeling Scared', pageText: 'In the classroom, your teacher comes over to introduce herself. \n Hi, I\'m Miss Davis, what\'s your name? \n She holds out her hand.', optionOne: 'Reply, ""', optionTwo: 'Reply, ""', story_id: 1}
      ]);
    });
};
