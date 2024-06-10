class Randomization {
  public static getRandomItem = <T>(list: T[]): T => {
    if (list.length === 0) {
      throw new Error('Cannot get a random item from an empty array')
    } else {
      return list[0]!
    }
  }
}

export default Randomization
