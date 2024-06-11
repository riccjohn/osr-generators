import { vi } from 'vitest'
import Description from './Description'
import traitsData from './data/traits.json'

vi.mock('../dice/Randomization')

describe('Description', () => {
  describe('traits', () => {
    const nouns = Object.keys(traitsData)

    const description = new Description()
    const traits = description.traits

    nouns.forEach(noun => {
      test(`generates a ${noun} trait`, () => {
        const possibleTraits = traitsData[noun]
        expect(possibleTraits.includes(traits[noun])).toBeTruthy()
      })
    })
  })
})
