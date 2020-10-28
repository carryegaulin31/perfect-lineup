function validateLineup(lineup) {
  return lineup.map((element) => {



    // 1) returns true when the lineup satisfies all conditions

    // 2) returns false when the lineup includes too many players from a single team
    const total = if (element['teamId'].includes <= 2
    // 3) returns false when the lineup includes too many players from a single game
    const total = if (element['gameId'].includes <= 3
    // 4) returns false when the lineup includes too many players
  // should go at END?
  const total = if (element['name'].includes === 9
    // 5) returns false when the lineup does not have the right number of players at each position
    const total = if (element.includes['position.OF'] === 3 && element.includes[]
    // 6) returns false when the lineup includes too few players from a single position

    // 7) returns false when the lineup does not include a player from a position

    // 8) returns false when the lineup has a total salary greater than 45000 
  }
  
module.exports = validateLineup
