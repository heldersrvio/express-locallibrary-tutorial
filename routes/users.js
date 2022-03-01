const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, _next) => {
	res.send('respond with a resource');
});

router.get('/cool/', (_req, res, _next) => {
	res.send("You're so cool");
});

module.exports = router;
