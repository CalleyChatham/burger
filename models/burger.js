var orm = require("../config/orm.js");

//create object
var burger = {
    selectAll: function () {
        orm.selectAll('burger', function(res) {
            return new Promise(resolve, reject) {
                if(res) {

                    resolve(res)
                } else {
                    reject()
                }
            }
        })
    }
}

module.exports = burger;

burger.selectAll(function(res) {
    console.log(res)
})

burger
    .selectAll()
    .then(function(res) {

    })
    .catch(function(err) {

    })






