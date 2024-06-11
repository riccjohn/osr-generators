import { KnaveDescription, KnaveGear } from './'
import { Dice } from '../dice'
import type { Traits } from './Description'
import type { ArmorItem, GearItem, WeaponItem } from './Gear'

type Abilities = Record<AbilityName, Ability>

type AbilityName =
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

class Character {
  public armor: ArmorItem = {
    count: 0,
    defense: 0,
    name: '',
    quality: 0,
    slots: 0,
    type: 'armor',
  }
  public copperPieces: number = 0
  public items: GearItem[] = [{ name: '', count: 0, type: 'food', slots: 0 }]
  public itemSlots: number = 13
  public level: number = 1
  public maxHp: number = 4
  public traits: Traits = {
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
  public weapon: WeaponItem = {
    count: 0,
    damage: '',
    hand: 0,
    name: '',
    quality: 0,
    slots: 1,
    type: 'weapon',
  }

  private abilities: Abilities = {
    charisma: { bonus: 3, defense: 13 },
    constitution: { bonus: 3, defense: 13 },
    dexterity: { bonus: 3, defense: 13 },
    intelligence: { bonus: 3, defense: 13 },
    strength: { bonus: 3, defense: 13 },
    wisdom: { bonus: 3, defense: 13 },
  }

  constructor() {
    this.generate()
  }

  public generate = (): void => {
    this.level = 1
    this.abilities = this.generateAbilities()
    this.copperPieces = this.rollForCopperPieces()
    this.itemSlots = this.constitution.defense
    this.maxHp = this.rollHitPoints()

    const gear = new KnaveGear(this.itemSlots)

    this.traits = this.generateTraits()
    this.items = gear.items
    this.armor = gear.armor
    this.weapon = gear.weapon
  }

  public get abilityScores() {
    return this.abilities
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

  // END PUBLIC METHODS

  private rollForCopperPieces = () => {
    return Dice.roll(6, 3) + 20
  }

  private rollHitPoints = () => {
    return Dice.roll(8)
  }

  private generateAbilities = (): Abilities => {
    const {
      charisma,
      constitution,
      dexterity,
      intelligence,
      strength,
      wisdom,
    } = {
      charisma: this.rollAbilityScore(),
      constitution: this.rollAbilityScore(),
      dexterity: this.rollAbilityScore(),
      intelligence: this.rollAbilityScore(),
      strength: this.rollAbilityScore(),
      wisdom: this.rollAbilityScore(),
    }

    const abilities = {
      charisma: { bonus: charisma, defense: charisma + 10 },
      constitution: { bonus: constitution, defense: constitution + 10 },
      dexterity: { bonus: dexterity, defense: dexterity + 10 },
      intelligence: { bonus: intelligence, defense: intelligence + 10 },
      strength: { bonus: strength, defense: strength + 10 },
      wisdom: { bonus: wisdom, defense: wisdom + 10 },
    }

    return abilities
  }

  private rollAbilityScore = (): number => {
    const rolls = new Array(3).fill(undefined).map(() => Dice.roll(6))
    return Math.min(...rolls)
  }

  private generateTraits = (): Traits => {
    return new KnaveDescription().traits
  }
}

export default Character
