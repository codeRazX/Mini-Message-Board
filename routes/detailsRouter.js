const {Router} = require('express');
const detailsRouter = Router();
const messages = require('../data/messages');

detailsRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const message = messages.find(msg => msg.id === parseInt(id));
    
    if (!message) {
      return res.status(404).send('Message not found');
    }
    res.render('details', { message });
  });
  

module.exports = detailsRouter;