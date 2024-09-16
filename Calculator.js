function add(...args) {
    let sum = args.reduce((memo, numb) => memo + numb, 0);
    console.log("aaa");
    return sum;
}

function subtract(...args) {
    console.log("aaa");
    if (args.length === 0) return 0; // Handle case with no arguments
    let subtraction = args[0];
    for (let i = 1; i < args.length; i++) {
        subtraction -= args[i];
    }
    return subtraction;
}

function multiply(...args) {
    console.log("aaa");
    let multiplication = args.reduce((memo, numb) => {
        if (isNaN(numb)) { throw new Error("not a number"); }
        return memo * numb;
    }, 1);
    return multiplication;
}

module.exports = { add, subtract, multiply };
