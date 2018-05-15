
function ReadJumpsJson(jumps, category) {
  let jumpsCategorized = {}

  jumps.forEach((jump) => {
    let jumpToAdd = {}

    if (!jumpsCategorized[jump[category]]){
      jumpsCategorized[jump[category]] = 1;
    } else {
      jumpsCategorized[jump[category]] = jumpsCategorized[jump[category]] + 1;
    }
  })

  let jumpDataForGraph = []
  Object.keys(jumpsCategorized).forEach((j) => {
    let jump = {}
    jump['name'] = j
    jump['value'] = jumpsCategorized[j]
    jumpDataForGraph.push(jump)
  })
  return jumpDataForGraph
}

export  { ReadJumpsJson };
