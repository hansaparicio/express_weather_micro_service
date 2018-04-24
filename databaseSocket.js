var admin = require("firebase-admin");

var serviceAccount = require("./currentforecastbuenos-firebase-adminsdk-i5a83-af5f47f6f2");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://currentforecastbuenos.firebaseio.com"
});

var db = admin.database();

var ref = db.ref("data");

module.exports = {
    getDb : function () {
        return db;
    },

    getRef : function () {
        return ref;
    },

    printConsoleDb: function () {
        console.log(db);
    },

    pushData: function (data) {
        db.push(data);
    }
}




