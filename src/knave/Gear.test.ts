import { vi } from 'vitest'
import Gear from './Gear'
import { armorData, gearData, weaponData } from './data'
import type { GearItem } from './knaveTypes'

vi.mock('../dice/Randomization')

describe('Gear', () => {
  const itemSlots = 12

  describe('initialization', () => {
    test('sets the max item slots', () => {
      const gear = new Gear(itemSlots)
      expect(gear.itemSlots).toEqual(itemSlots)
    })
  })

  describe('items', () => {
    test('contains 2 days of rations', () => {
      const gear = new Gear(itemSlots)
      const rations = gear.items.filter(gear => gear.name === 'rations')
      expect(rations).toHaveLength(2)
    })

    test('contains 2 pieces of dungeonnering gear', () => {
      const gear = new Gear(itemSlots)
      const dungeoneeringGear = gear.items.filter(item =>
        gearData.dungeoneeringGear.includes(item),
      )
      expect(dungeoneeringGear).toHaveLength(2)
    })

    test('has one piece of gear from General Gear Set 1', () => {
      const gear = new Gear(itemSlots)
      const generalGear1 = gear.items.filter(item =>
        gearData.generalGearSetOne.includes(item),
      )
      expect(generalGear1).toHaveLength(1)
    })

    test('has one piece of gear from General Gear 2', () => {
      const gear = new Gear(itemSlots)
      const generalGear2 = gear.items.filter(item =>
        gearData.generalGearSetTwo.includes(item),
      )
      expect(generalGear2).toHaveLength(1)
    })
  })

  describe('armor', () => {
    test('selects a random piece of armor', () => {
      const gear = new Gear(itemSlots)
      expect(armorData.armor.includes(gear.armor)).toBeTruthy()
    })

    test('adds the armor to the characters gear', () => {
      const gear = new Gear(itemSlots)
      const armor = gear.items.filter(item => item.type === 'armor')

      expect(armor).toHaveLength(1)
    })
  })

  describe('weapon', () => {
    test('selects a random weapon', () => {
      const gear = new Gear(itemSlots)
      expect(weaponData.weapons.includes(gear.weapon)).toBeTruthy()
    })

    test('adds the weapon to the characters gear', () => {
      const gear = new Gear(itemSlots)
      const weapon = gear.items.filter(
        (item: GearItem) => item.type === 'weapon',
      )
      expect(weapon).toHaveLength(1)
    })
  })

  test('only adds items that fit in the available slots', () => {
    const itemSlotsAvailable = 8

    const gearArray = new Array(10)
      .fill(undefined)
      .map(() => new Gear(itemSlotsAvailable))

    gearArray.forEach(gear => {
      const itemSlotsUsed = gear.items.reduce((acc, curr) => {
        return (acc += curr.slots)
      }, 0)

      expect(itemSlotsUsed).toBeLessThanOrEqual(itemSlotsAvailable)
    })
  })
})
