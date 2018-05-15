import { ReadJumpsJson } from '../../src/readJumps.js';

describe("Jump Reader", function() {

  // beforeEach(function() {
  //   player = new Player();
  //   song = new Song();
  // });

  const original = [
    {number: '515', type: 'belly', location:'perris'},
    {number: '516', type: 'freefly', location:'perris'},
    {number: '517', type: 'freefly', location:'mile hi'}
  ]

  const outcome = [{name: 'belly', value: 1},
                  {name: 'freefly', value: 2}]



  it("should change jumps by type to a graph readable json", function() {
    let jumpsRead = ReadJumpsJson(original)
    expect(jumpsRead).toEqual(outcome);
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
