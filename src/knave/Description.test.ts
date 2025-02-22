import { vi } from 'vitest'
import Description from '@/knave/Description'
import { traitsData } from '@/knave/data'

vi.mock('../dice/Randomization')

describe('Description', () => {
  describe('traits', () => {
    const nouns = Object.keys(traitsData) as (keyof typeof traitsData)[]

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
