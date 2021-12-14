const mongoose = require('mongoose');
const app = require('./app');

let server; let PORT =5000;
mongoose.connect("mongodb+srv://aaryan:aaryandb@cluster0.2otyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
  server = app.listen(PORT, () => {
    console.log("Project Shiba has Begun!")
  });
});





                                 