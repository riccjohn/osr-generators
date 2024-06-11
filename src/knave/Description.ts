import traitsData from './data/traits.json'
import { Randomization } from '../dice'

export type Noun =
  | 'physique'
  | 'face'
  | 'skin'
  | 'hair'
  | 'clothing'
  | 'virtue'
  | 'vice'
  | 'speech'
  | 'background'
  | 'misfortune'

export type Traits = Record<Noun, string>

class Description {
  public traits: Traits

  constructor() {
    this.traits = this.generateRandomTraits()
  }

  private generateRandomTraits = () => {
    const defaultTraits: Traits = {
      physique: '',
      face: '',
      skin: '',
      hair: '',
      clothing: '',
      virtue: '',
      vice: '',
      speech: '',
      background: '',
      misfortune: '',
    }

    const parsedTraitData = this.getTraitData()

    const nouns = Object.keys(parsedTraitData)

    const randomTraits = nouns.reduce((acc, curr) => {
      const currentTrait = curr as Noun
      const randomTraitValue = Randomization.getRandomItem(
        parsedTraitData[currentTrait],
      )
      acc[currentTrait] = randomTraitValue
      return acc
    }, defaultTraits)

    return randomTraits
  }

  private getTraitData = () => {
    return traitsData satisfies Record<Noun, string[]>
  }
}

export default Description
