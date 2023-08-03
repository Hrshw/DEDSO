const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rahul:RSsmy11ssm@formbuilder.t0jplog.mongodb.net/dedso_test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("mongodb connected");
})
.catch((err) => {
    console.log("Failed to connect to MongoDB:", err);
});
