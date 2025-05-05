const {Router} = require('express');
const newRouter = Router();
const messages = require('../data/messages');

newRouter.get('/',(req,res)=>{
    res.render('form');
})
newRouter.post('/',(req,res)=>{
    messages.push({...req.body, added: new Date(),id: messages.length});
    res.redirect("/");
})


module.exports = newRouter;