function validateLineup(lineup) {
  let teamCount = []
  let gameCount = []

  for (let i = 0; i < lineup.length; i++) {
    teamCount.push(lineup[i].teamId)
    gameCount.push(lineup[i].gameId)
    if (lineup.length > 9) { return false }
  }
  teamCount.sort()
  gameCount.sort()
  for (let i = 0; i < teamCount.length; i++) {
    if (teamCount[i] === teamCount[i + 1] && teamCount[i] === teamCount[i + 2]) { return false }
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
    }
    const payroll = lineup.reduce((agg, player) => {
      return agg + player.salary
    }, 0)

    if (payroll < 45000) {
      return true
    }

    // const total = element['position'] * (1 - element['discount']) * element['quantity']
    // element['position'] = positionCount
    // return element
  }



  /* if (element.includes['position.OF'] === 3 && element.includes['position.P' &&
   'position.C' && 'postion.1B' && 'position.2B' &&
    'position.3B' && 'position.SS'] === 1)*/
  return true
}
/* var uniq = names
  .map((name) => {
    return {
      count: 1,
      name: name
    }
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})
var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
console.log(duplicates) */
// 5) returns false when the lineup does not have the right number of players at each position
// 
// THINK THIS LINE IS GOOD FOR 5, 6 AND 7 TEST
// 6) returns false when the lineup includes too few players from a single position
// 7) returns false when the lineup does not include a player from a position

// 8) returns false when the lineup has a total salary greater than 45000 
// const totalSalary = (lineup.reduce((agg, element) => {
// if (element['lineup'] === 'salary') {
// console.log(element.experience)

// return agg + element.salary
// }
// if (agg > 45, 000) return false


module.exports = validateLineup
console.log(validateLineup([{
  id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
  id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
}, {
  id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
}, {
  id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
}, {
  id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
}, {
  id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
}, {
  id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
}, {
  id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
}, {
  id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
}]))