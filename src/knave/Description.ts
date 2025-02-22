import { traitsData } from '@/knave/data'
import { Randomization } from '../dice'
import { Noun, Traits } from '@/knave/knaveTypes'

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
