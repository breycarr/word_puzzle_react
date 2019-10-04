// DICTIONARY will be replaced by a link to the OED API
const DICTIONARY = ["hello", "weekday", "greyhound"]
const MAXBOARDLENGTH = 9

var errNotString = `not a string`

export const solve = (arg) => {
    if (typeof(arg) !== `string`) {
        throw new Error(errNotString)
    }

    var score = 0

    if (DICTIONARY.includes(arg)) {
        score = (arg.length === MAXBOARDLENGTH) ? arg.length * 2 : arg.length
    }

    return score
}
