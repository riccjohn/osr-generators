import { vi } from 'vitest'
import KnaveCharacter, { type AbilityName } from './Character'

vi.mock('../dice/Dice')
vi.mock('./Description')
vi.mock('./Gear')
vi.mock('../dice/Randomization')

describe('KnaveCharacter', () => {
  describe('generate()', () => {
    test('generates a level 1 character by default', () => {
      const generatedCharacter = new KnaveCharacter()
      expect(generatedCharacter.level).toBe(1)
    })

    describe('abilities', () => {
      const abilityNames = [
        'charisma',
        'constitution',
        'dexterity',
        'intelligence',
        'strength',
        'wisdom',
      ] satisfies AbilityName[]

      test.each(abilityNames)(
        'generates a random %s bonus between 1-6 (inclusive)',
        ability => {
          const generatedCharacter = new KnaveCharacter()
          expect(generatedCharacter[ability].bonus).toBeLessThanOrEqual(6)
          expect(generatedCharacter[ability].bonus).toBeGreaterThanOrEqual(1)
        },
      )

      test.each(abilityNames)(
        'generates a %s defense that is 10 higher than the bonus',
        ability => {
          const generatedCharacter = new KnaveCharacter()
          expect(generatedCharacter[ability].defense).toEqual(
            generatedCharacter[ability].bonus + 10,
          )
        },
      )

      describe('abilityScores', () => {
        test('has a getter method to get all ability scores', () => {
          const generatedCharacter = new KnaveCharacter()
          const abilities = generatedCharacter.abilityScores
          const abilityNames = Object.keys(abilities)
          expect(abilityNames.sort()).toEqual([
            'charisma',
            'constitution',
            'dexterity',
            'intelligence',
            'strength',
            'wisdom',
          ])
        })
      })
    })

    test('has a number of item slots equal to the constitution defense', () => {
      const generatedCharacter = new KnaveCharacter()
      expect(generatedCharacter.itemSlots).toBe(
        generatedCharacter.constitution.defense,
      )
    })

    test('has a randomly generated starting copper pieces', () => {
      const generatedCharacter = new KnaveCharacter()
      expect(generatedCharacter.copperPieces).toBeGreaterThanOrEqual(23)
      expect(generatedCharacter.copperPieces).toBeLessThanOrEqual(38)
    })

    test('has a maxHP stat between 1 and 8', () => {
      const generatedCharacter = new KnaveCharacter()
      expect(generatedCharacter.maxHp).toBeGreaterThanOrEqual(1)
      expect(generatedCharacter.maxHp).toBeLessThanOrEqual(8)
    })

    test('generates a list of items', () => {
      const generatedCharacter = new KnaveCharacter()
      expect(generatedCharacter.items.length).toBeGreaterThan(1)
    })

    test('randomly generates armor', () => {
      const generatedCharacter = new KnaveCharacter()
      expect(generatedCharacter.armor).toBeTruthy()
    })

    test('randomly generates a weapon', () => {
      const generatedCharacter = new KnaveCharacter()
      expect(generatedCharacter.weapon).toBeTruthy()
    })
  })
})
