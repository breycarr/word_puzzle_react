import solve from './Solver'

describe("#solve", () => {
    it("should accept a string", () => {
        expect(() => { solve("hello"); }).not.toThrow()
    })

    it("should not accept an argument that isn't a string", () => {
        expect(() => { solve(123); }).toThrow(`not a string`)
    })

    it("should return points equal to then length of the word if it exists in the dictionary", () => {
        expect(solve("hello")).toEqual(5)
        expect(solve("weekday")).toEqual(7)
    })

    it("should return 0 if the word does not exist", () => {
        expect(solve("ollo")).toEqual(0)
    })

    it("should return 18 points if all 9 numbers are used", () => {
        expect(solve("greyhound")).toEqual(18)
    })
})