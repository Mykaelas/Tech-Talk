const { Comment } = require('../models');


const commentData = [
    {
        comment_text: 'I love tech!',
        user_id: 1,
        post_id: 1

    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
