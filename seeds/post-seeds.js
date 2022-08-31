const { Post } = require('../models');

const postdata = [
    {
        title: 'Apples New Samsung Galaxy Pear Watch',
        body: ' Have you seen the newest collaboration between Samsung Galaxy and Apple and the new company pear? Iconic',
        post_url: ' www.apple.com/aprilfools',
        user_id: 2
    }
]


const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
