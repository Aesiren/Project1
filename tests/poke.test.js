//import { setRandom, setByName } from "../Scripts/links.js";
import { pokeClass } from "./Scripts/pokeClass.js";
import { getRandom, getById, getByName } from "../Scripts/apiCall.js";



describe('global function testing', () => {
  beforeEach(() => {
    global.fetch = fest.fn(() => {
      Promise.resolve({
        name: 'pikachu',
        id: 25,
        height: 4,
        weight: 60,
        base_experience: 112,
        sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
        stats: [],
        moves: [],

      })
    })
  })

  describe('apiCall function tests', () => {

    describe('getRandom function test', () => {
      it('should return a random pokemon when called', () => {
        expect(getRandom()).to.equal();
      })
    })
    describe('getById function test', () => {
      it('should return a specific pokemon when passed an ID', () => {

      })
    })
    describe('getByName function test', () => {
      it('should return a specific pokemon when passed a name', () => {

      })
    })
  })

  describe('pokeClass tests', () => {
    it('should return a new class', () => {

    })
    it('should return correct data when passed', () => {

    })
  })


  describe('Links function tests', () => {
    describe('setRandom function test', () => {
      it('should return a random pokemon when called', () => {

      })
    })
    describe('viewPage function test', () => {
      it('should pass correct url when passed null data', () => {

      })
      it('should pass correct url when passed actual data', () => {

      })
    })
    describe('setByName function test', () => {
      it('should return the correct pokemon when passed a name', () => {

      })
    })
  })
})






