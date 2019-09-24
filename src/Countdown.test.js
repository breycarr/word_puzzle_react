import Countdown from './Countdown'

describe("Countdown", () => {
  var game;

  beforeEach(() => {
    game = new Countdown;
  });

  it("should start with an empty board", () => {
    expect(game.showBoard()).toEqual([]);
  });

  describe("#consonant", () => {
    it("should return a consonant when called", () => {
      expect(game.consonant()).toMatch(/[B-DF-HJ-NP-TV-Z]/)
    });

    it("should add a consonant to the board", () => {
      game.consonant()
      expect(game.showBoard().length).toEqual(1)
      expect(game.showBoard().shift()).toMatch(/[B-DF-HJ-NP-TV-Z]/)
    })
  });

  describe("#vowel", () => {
    it("should return a vowel when called", () => {
      expect(game.vowel()).toMatch(/[AEIOU]/)
    });

    it("should add a vowel to the board", () => {
      game.vowel()
      expect(game.showBoard().length).toEqual(1)
      expect(game.showBoard().shift()).toMatch(/[AEIOU]/)
    });
  });

  describe("board length", () => {
    it("should be a maximum of 9 letters", () => {
      for (var i = 0; i < 4; i++)
        game.vowel();
      for (var i = 0; i < 5; i++)
        game.consonant();
      expect(() => { game.consonant(); }).toThrow('The board can only be 9 letters!')
    });

    it("should only allow a maximum of 6 consonants", () => {
      for (var i = 0; i < 6; i++) { 
        game.consonant(); 
      }
      expect(() => { game.consonant(); }).toThrow('The board can only have 6 consonants');
    });

    it("should only allow a maximum of 5 vowels", () => {
      for (var i = 0; i < 5; i++)
        game.vowel();
      expect(() => { game.vowel(); }).toThrow('The board can only have 5 vowels');
    });
  });
});
