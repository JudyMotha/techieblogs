const router = require('express').Router();

const userRoutes = require('./user_rte.js');
const postRoutes = require('./post_rte.js');
const commentRoutes = require('./comment_rte.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;