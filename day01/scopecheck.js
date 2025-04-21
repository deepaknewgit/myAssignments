function testVar() {
    if (true) {
        var x = 10;  // x is function-scoped
        console.log("Inside if block with var, x:", x); // 10
    }
    console.log(x); // 10 (accessible outside the if block)
}

function testLet() {
    if (true) {
        let y = 20;  // y is block-scoped
        console.log(y); // 20
    }
    console.log(y);
}

testVar();
testLet();
