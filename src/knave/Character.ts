import { KnaveDescription, KnaveGear } from './'
import { Dice } from '../dice'
import type { ArmorItem, GearItem, WeaponItem } from '@/knave/knaveTypes'

type Abilities = Record<AbilityName, Ability>

export type AbilityName =
  | 'charisma'
  | 'constitution'
  | 'dexterity'
  | 'intelligence'
  | 'strength'
  | 'wisdom'

type Ability = {
  bonus: number
  defense: number
}

type CharacterTraits = {
  physique: string
  face: string
  skin: string
  hair: string
  clothing: string
  virtue: string
  vice: string
  speech: string
  background: string
  misfortune: string
}

type CharacterStats = {
  level: number
  maxHp: number
  itemSlots: number
  copperPieces: number
}

class Character {
  private abilities: Abilities
  private stats: CharacterStats
  public traits: CharacterTraits
  public armor: ArmorItem
  public weapon: WeaponItem
  public items: GearItem[]

  constructor() {
    this.abilities = this.generateAbilities()
    this.stats = this.generateStats()
    this.traits = this.generateTraits()

    const gear = new KnaveGear(this.stats.itemSlots)
    this.armor = gear.armor
    this.weapon = gear.weapon
    this.items = gear.items
  }

  public get abilityScores() {
    return this.abilities
  }

  public get level() {
    return this.stats.level
  }

  public get maxHp() {
    return this.stats.maxHp
  }

  public get itemSlots() {
    return this.stats.itemSlots
  }

  public get copperPieces() {
    return this.stats.copperPieces
  }

  public get charisma() {
    return this.abilities.charisma
  }

  public get constitution() {
    return this.abilities.constitution
  }

  public get dexterity() {
    return this.abilities.dexterity
  }

  public get intelligence() {
    return this.abilities.intelligence
  }

  public get strength() {
    return this.abilities.strength
  }

  public get wisdom() {
    return this.abilities.wisdom
  }

  private generateStats(): CharacterStats {
    return {
      level: 1,
      maxHp: this.rollHitPoints(),
      itemSlots: this.generateAbilities().constitution.defense,
      copperPieces: this.rollForCopperPieces(),
    }
  }

  private generateAbilities(): Abilities {
    const abilityNames: AbilityName[] = [
      'charisma',
      'constitution',
      'dexterity',
      'intelligence',
      'strength',
      'wisdom',
    ]

    return abilityNames.reduce((acc, name) => {
      const bonus = this.rollAbilityScore()
      acc[name] = {
        bonus,
        defense: bonus + 10,
      }
      return acc
    }, {} as Abilities)
  }

  private rollAbilityScore(): number {
    return Math.min(
      ...Array(3)
        .fill(0)
        .map(() => Dice.roll(6)),
    )
  }

  private rollForCopperPieces(): number {
    return Dice.roll(6, 3) + 20
  }

  private rollHitPoints(): number {
    return Dice.roll(8)
  }

  private generateTraits(): CharacterTraits {
    return new KnaveDescription().traits
  }

  public generate(): void {
    this.abilities = this.generateAbilities()
    this.stats = this.generateStats()
    this.traits = this.generateTraits()

    const gear = new KnaveGear(this.stats.itemSlots)
    this.armor = gear.armor
    this.weapon = gear.weapon
    this.items = gear.items
  }
}

export default Character
