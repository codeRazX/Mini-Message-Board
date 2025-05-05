const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const detailsRouter = require('./routes/detailsRouter');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',indexRouter);
app.use('/new',newRouter);
app.use('/details/',detailsRouter);

const PORT  = process.env.PORT || 3000;
app.listen(PORT,()=> console.log('Server running on port: ',PORT ));