import data from './data.js'

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  // TODO: Calculate the threat level (health × damage) for each monster
  return Object.entries(monsters).map(([name, { health, damage }]) => ({
    name,
    threatLevel: health * damage,
  }))
  // and return an array of monsters with their threat levels
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  // TODO: Extract all monster names into an array using Object methods
  return Object.keys(monsters)
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */

export function organizeByThreatLevel(monsters) {
  const threatLevels = {
    lowThreat: [],
    mediumThreat: [],
    highThreat: [],
  }

  Object.entries(monsters).forEach(([name, { health, damage }]) => {
    const threatLevel = health * damage
    if (threatLevel < 10000) {
      threatLevels.lowThreat.push({ name, threatLevel })
    } else if (threatLevel <= 50000) {
      threatLevels.mediumThreat.push({ name, threatLevel })
    } else {
      threatLevels.highThreat.push({ name, threatLevel })
    }
  })

  return threatLevels
  // TODO: Transform the data structure to organize monsters by threat level
  // instead of difficulty
  // lowThreat: < 10,000
  // mediumThreat: between 10,000 and 50,000
  // highThreat: > 50,000
}

export function sum(a, b) {
  return a + b
}
