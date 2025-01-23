test("One euro should be 1.07 dollars", () => {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(1)).toBe(1.07);
})

test("One dollar should be 156.39 yenes", () => {

    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(1)).toBe(156.39);
})

test("One yen should be 0.0052 pounds", () => {

    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1)).toBe(0.0052);
})