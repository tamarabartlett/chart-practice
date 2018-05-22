var moment = require('moment');

describe("Jump Reader", function() {

  // beforeEach(function() {
  //   player = new Player();
  //   song = new Song();
  // });

  const jumps = [
    {number: '515', date:'03/31/2018', type: 'night jump', altitude:'12,500',location:'perris'},
    {number: '516', date:'04/01/2018', type: 'freefly', altitude:'12,500',location:'perris'},
    {number: '516', date:'04/01/2018', type: 'freefly', altitude:'12,500',location:'perris'}
  ]


  const outcome = [{name: 'March', value: 1},
                  {name: 'April', value: 2}]
                  //
                  // var day = moment("1995-12-25");
                  //
                  // var moment = require('moment');



  // it("should change jumps by type to a graph readable json", function() {
  //   let jumpsRead = ReadJumpsJson(original)
  //   expect(jumpsRead).toEqual(outcome);
  // });

  // it("should get month from moment", function() {
  //   let mybirthday = "1989-10-20"
  //   let mybirthdaymoment = moment(mybirthday)
  //   expect(mybirthdaymoment.month()).toEqual(9);
  // });

  function readJumpsByDate(jumps) {
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
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
    return months[monthNumberFromMoment]
  }

  it("should count jumps by month to a graph readable json", function() {
    let jumpsRead = readJumpsByDate(jumps)
    expect(jumpsRead).toEqual(outcome);
  });

  it("should return the right month", function() {

    expect(getMonthName(0)).toEqual('January');
    expect(getMonthName(9)).toEqual('October');
  });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });
  //
  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });
  // });
});
