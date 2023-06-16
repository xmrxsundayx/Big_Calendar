const express = require('express');
const app = express();
const cors = require('cors')
const port =8000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./config/db')
require('./routes/eventRoutes')(app)
require('./routes/taskRoutes')(app)

app.listen(port, () =>console.log(`listening on port: ${port}`));