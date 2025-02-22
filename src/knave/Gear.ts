import { armorData, gearData, weaponData } from '@/knave/data'
import { Randomization } from '@/dice'
import type { ArmorItem, GearItem, WeaponItem } from '@/knave/knaveTypes'

class Gear {
  public itemSlots: number
  public items: GearItem[]
  public armor: ArmorItem
  public weapon: WeaponItem
  private itemSlotsUsed: number

  constructor(itemSlots: number) {
    this.itemSlots = itemSlots
    this.itemSlotsUsed = 0
    this.items = this.getRandomGear()
    this.armor = this.getRandomArmor()
    this.weapon = this.getRandomWeapon()
  }

  private getRandomArmor = (): ArmorItem => {
    const slotsRemaining = this.itemSlots - this.itemSlotsUsed

    const availableArmor = (armorData.armor as ArmorItem[]).filter(armor => {
      // Ensures there is at least 1 slot remaining for a weapon to be added
      return armor.slots < slotsRemaining
    })
    const armor = Randomization.getRandomItem(availableArmor)

    this.itemSlotsUsed += armor.slots
    this.items.push(armor)
    return armor
  }

  private getRandomGear(): GearItem[] {
    const dg = gearData.dungeoneeringGear as GearItem[]
    const gen1 = gearData.generalGearSetOne as GearItem[]
    const gen2 = gearData.generalGearSetTwo as GearItem[]

    const startingGear: GearItem[] = [
      { name: 'rations', count: 1, slots: 1, type: 'food' },
      { name: 'rations', count: 1, slots: 1, type: 'food' },
    ]

    const dungeoneeringGear: GearItem[] = new Array(2)
      .fill(undefined)
      .map(() => Randomization.getRandomItem(dg))

    const generalGear1 = Randomization.getRandomItem(gen1)
    const generalGear2 = Randomization.getRandomItem(gen2)

    const gear = [
      ...startingGear,
      ...dungeoneeringGear,
      generalGear1,
      generalGear2,
    ]

    const itemSlotsUsed = gear.reduce((acc, curr) => (acc += curr.slots), 0)
    this.itemSlotsUsed = itemSlotsUsed

    return gear
  }

  private getRandomWeapon = (): WeaponItem => {
    const slotsRemaining = this.itemSlots - this.itemSlotsUsed
    const availableWeapons = (weaponData.weapons as WeaponItem[]).filter(
      weapon => {
        return weapon.slots <= slotsRemaining
      },
    )
    const weapon = Randomization.getRandomItem(availableWeapons)
    this.itemSlotsUsed += weapon.slots
    this.items.push(weapon)
    return weapon
  }
}

export default Gear
