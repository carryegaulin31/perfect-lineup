function validateLineup(lineup) {
  const idCount = lineup.map(lineup => lineup.teamId)
  const countId = idCount.reduce((agg, teamId) => {
    agg[teamId] = (agg[teamId] || 0) + 1

    return agg
  }, {})

  if (countId > 2) return false

  const gameCount = lineup.map(lineup => lineup.gameId)
  const countGame = gameCount.reduce((agg, gameId) => {
    agg[gameId] = (agg[gameId] || 0) + 1

    return agg
  }, {})

  if (countGame > 2) return false

  const positionCount = lineup.map(lineup => lineup.position)
  const countPostion = positionCount.reduce((agg, position) => {
    agg[position] = (agg[position] || 0) + 1

    return agg
  }, {})

  const salaryCount = lineup.map(lineup => lineup.salary)

  console.log(count)
  console.log(idCount)
  console.log(gameCount)
  console.log(positionCount)
  console.log(salaryCount)
  console.log(countPostion)
}
module.exports = validateLineup






/* for (let i = 0; i < lineup.length; i++) {
      teamCount.push(lineup[i].teamId)
      gameCount.push(lineup[i].gameId)
      if (lineup.length > 9) { return false }
    }
    teamCount.sort()
    gameCount.sort()
    for (let i = 0; i < teamCount.length; i++) {
      if (teamCount[i] === teamCount[i + 1] && teamCount[i] === teamCount[i + 2]) { return false }
    }
    for (let i = 0; i < gameCount.length; i++) {
      if (gameCount[i] === gameCount[i + 2]) {
        return false
      }
      const requPos = ['1B', '2B', '3B', 'C', 'OF', 'OF', 'OF', 'P', 'SS']
      let currentPos = []

      for (let i = 0; i < lineup.length; i++) {
        currentPos.push(lineup[i].position)
      }
      currentPos.sort()
      if (currentPos === requPos) {
        return true
      }
      else {
        return false
      }

      /* const payroll = lineup.reduce((agg, player) => {
        return agg + player.salary
      }, 0)

      if (payroll < 45000) {
        return true
      }

    }
  */
// COUNT POSITIONS!! REDUCE INTO AN EMPTY OBJECT WITH POSITION AS THE KEYS AND COUNTS AS THE VALUES
// GOOGLE REDUCE TO COUNT USING OBJECT(JAVASCRIPT)


/* const totalSalary = (lineup.reduce((agg, element) => {
    if (element['lineup'] === 'salary') {
      console.log(element.experience)

      return agg + element.salary
    }
    if (agg > 45, 000) return false*/


