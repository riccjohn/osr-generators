class Randomization {
  public static getRandomItem = <T>(list: T[]): T => {
    if (list.length === 0) {
      throw new Error('Cannot get a random item from an empty array')
    }
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]!
  }
}

export default Randomization
