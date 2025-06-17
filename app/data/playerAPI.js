export const PlayerAPI = {
  players: [
    {number: 1, name: 'Tinky Stink', position: 'G'},
    {number: 2, name: 'Blithy Blath', position: 'D'},
    {number: 3, name: 'Ember Foxx', position: 'D'},
    {number: 4, name: 'Teran Arthur', position: 'M'},
    {number: 5, name: 'Metro Man', position: 'M'},
    {number: 6, name: 'Mega Mind', position: 'F'},
  ],
  all: function () {
    return this.players;
  },
  get: function (id) {
    const isPlayer = (p) => p.number === id;

    return this.players.find(isPlayer);
  },
}