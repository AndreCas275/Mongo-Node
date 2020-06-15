const mongoose = require("mongoose");


mongoose
    .connect("mongodb+srv://root:n0m3l0@cluster0-qxrv3.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));