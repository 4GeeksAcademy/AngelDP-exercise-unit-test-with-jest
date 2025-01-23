
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (a) => {
    let dollar = 1.07
    return a * dollar
}

const fromDollarToYen = (a) => {
    let yen = 156.39
    return a * yen
}

const fromYenToPound = (a) => {
    let pound = 0.0052
    return a * pound 
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
