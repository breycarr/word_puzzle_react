import Countdown from './Countdown'

describe("Countdown", function() {
  var game;

  beforeEach(function() {
    game = new Countdown;
  });

  it("should start with an empty board", function() {
    expect(game.showBoard()).toEqual([]);
  });

  describe("#consonant", function() {
    it("should return a consonant when called", function() {
      expect(game.consonant()).toMatch(/[B-DF-HJ-NP-TV-Z]/)
    });

    it("should add a consonant to the board", function() {
      game.consonant()
      expect(game.showBoard().length).toEqual(1)
      expect(game.showBoard().shift()).toMatch(/[B-DF-HJ-NP-TV-Z]/)
    })
  });

  describe("#vowel", function() {
    it("should return a vowel when called", function() {
      expect(game.vowel()).toMatch(/[AEIOU]/)
    });

    it("should add a vowel to the board", function() {
      game.vowel()
      expect(game.showBoard().length).toEqual(1)
      expect(game.showBoard().shift()).toMatch(/[AEIOU]/)
    });
  });

  describe("board length", function() {
    it("should be a maximum of 9 letters", function() {
      for (var i = 0; i < 4; i++)
        game.vowel();
      for (var i = 0; i < 5; i++)
        game.consonant();
      expect(function() { game.consonant(); }).toThrow('The board can only be 9 letters!')
    });

    it("should only allow a maximum of 6 consonants", function() {
      for (var i = 0; i < 6; i++) { 
        game.consonant(); 
      }
      expect(function() { game.consonant(); }).toThrow('The board can only have 6 consonants');
    });

    it("should only allow a maximum of 5 vowels", function() {
      for (var i = 0; i < 5; i++)
        game.vowel();
      expect(function() { game.vowel(); }).toThrow('The board can only have 5 vowels');
    });
  });
});
