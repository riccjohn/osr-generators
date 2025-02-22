export type GearData = {
  dungeoneeringGear: GearItem[]
  generalGearSetOne: GearItem[]
  generalGearSetTwo: GearItem[]
}

export type GearItem = {
  count: number
  name: string
  slots: number
  type: 'food' | 'tool' | 'light' | 'armor' | 'weapon'
}

export type Armor = {
  name: string
  count: number
  defense: number
  slots: number
  type: 'armor'
  quality: number
}

export type ArmorData = {
  armor: Armor[]
}

export type ArmorItem = GearItem & {
  quality: number
  defense: number
  type: 'armor'
}

export interface WeaponData {
  weapons: WeaponItem[]
}

export type WeaponItem = GearItem & {
  damage: string
  hand: number
  quality: number
  type: 'weapon'
}

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

export type TraitsData = {
  [key in Noun]: string[]
}
