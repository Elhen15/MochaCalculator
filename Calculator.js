var _ = require("underscore");

module.exports = {
    add: function() {
        var sum = _.reduce(arguments, function(memo, numb) {
            return memo + numb;
        }, 0);
        console.log("aaa")
        return sum;
    },
    substract: function() {

        var substraction = 0;

        return substraction + arguments[0];
    },
    multiply: function() {
         var multiplication = _.reduce(arguments, function(memo, numb) {
             if (isNaN(numb)) { throw "not a number"}
            return memo * numb;
        }, 1);
        return multiplication;
    }
}
