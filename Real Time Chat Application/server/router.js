const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send("Join");
});

router.get('/chat', (req, res)=>{
  res.send("Chat");
});

module.exports = router;
