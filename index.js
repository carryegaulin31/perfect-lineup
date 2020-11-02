function validateLineup(lineup) {
  return playerCounter(lineup) &&
    gameCounter(lineup) &&
    posCounter(lineup) &&
    payroll(lineup) &&
    lineup.length === 9
}
function playerCounter(lineup) {
  const teamCounter = lineup.reduce((agg, player) => {
    const { teamId } = player

    if (agg[teamId]) {
      agg[teamId]++
    } else {
      agg[teamId] = 1
    }

    return agg
  }, {})

  for (let index in teamCounter) {
    if (teamCounter[index] > 2) return false
  }

  return true
}
function gameCounter(lineup) {
  const game = lineup.reduce((agg, player) => {
    const { gameId } = player

    if (agg[gameId]) {
      agg[gameId]++
    } else {
      agg[gameId] = 1
    }

    return agg
  }, {})

  for (let index in game) {
    if (game[index] > 3) return false
  }

  return true
}
function posCounter(lineup) {
  const singlePosition = ['C', 'P', '1B', '2B', '3B', 'SS']
  const countPosition = lineup.reduce((agg, player) => {
    const { position } = player

    agg[position] = agg[position] ? agg[position] + 1 : 1

    return agg
  }, {})

  for (let key in countPosition) {
    if (key === 'OF' && countPosition[key] !== 3) {
      return false
    }
    else if (countPosition[key] !== 1 && singlePosition.includes(key)) {
      return false
    }
  }

  return true
}

function payroll(lineup) {
  let salary = lineup.reduce((agg, player) => agg += player.salary, 0)

  return salary <= 45000
}
module.exports = validateLineup
