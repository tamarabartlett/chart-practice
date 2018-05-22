var moment = require('moment');

function ReadJumpsJson(jumps, category) {
  let jumpsCategorized = {}

  jumps.forEach((jump) => {
    if (!jumpsCategorized[jump[category]]){
      jumpsCategorized[jump[category]] = 1;
    } else {
      jumpsCategorized[jump[category]] = jumpsCategorized[jump[category]] + 1;
    }
  })

  return formatIntoGraphReadableData(jumpsCategorized)
}

function ReadJumpsByMonth(jumps) {
  let jumpsByMonth = {}
  jumps.forEach((jump) => {
    let month = moment(jump['date']).month()
    let monthName = getMonthName(month)
    if (!jumpsByMonth[monthName]){
      jumpsByMonth[monthName] = 1;
    } else {
      jumpsByMonth[monthName] = jumpsByMonth[monthName] + 1;
    }
  })

  return formatIntoGraphReadableData(jumpsByMonth)
}

function formatIntoGraphReadableData(dataByKeyValuePairs){
  let dataForGraph = []
  Object.keys(dataByKeyValuePairs).forEach((d) => {
    let dataum = {}
    dataum['name'] = d
    dataum['value'] = dataByKeyValuePairs[d]
    dataForGraph.push(dataum)
  })
  return dataForGraph
}

function getMonthName(monthNumberFromMoment) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
  return months[monthNumberFromMoment]
}

export  { ReadJumpsJson, ReadJumpsByMonth };
