const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shubham:OnqhejQub36Iq2ah@cluster0.w856zo6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb'))
    .catch((err) =>
    console.log('error connecting to mongodb', err))

module.exports = mongoose;
