var data = [];
var qnumber = 1;

function addSingleArtistList(trackList, artistName, selector, group) {
  for (item in trackList) {
    data.push({track: trackList[item], artist:artistName, number:qnumber, selector: selector, group:group});
    qnumber++;
  }
}

function addMultipleArtistList(trackList, selector, group) {
  for (item in trackList) {
    data.push({track: trackList[item][0], artist: trackList[item][1], number:qnumber, selector:selector, group:group});
    qnumber++;
  }
    
}

// P66
addSingleArtistList(["Golden Slumbers", "Sexy Sadie", "For No One", "Magical Mystery Tour", "Cry Baby Cry",
  "Taxman", "Strawberry Fields Forever", "Paperback Writer", "Here Comes The Sun", "Carry That Weight"],
  "The Beatles", "Nicky Wire", "The Beatles")

// P67
addMultipleArtistList([
  ["One of these Days", "Pink Floyd"],
  ["Little Wing", "The Jimi Hendrix Experience"],
  ["There Is An End", "The Greenhornes"],
  ["Wars Of Armageddon", "Funkadelic"],
  ["I Put A Spell On You", "Screamin' Jay Hawkins"],
  ["Hang On To A Dream", "Gandalf"],
  ["Remember (Walking In The Sand)", "The Shangri-Las"],
  ["Helter Skelter", "The Beatles"],
  ["I Believe To My Soul", "The Animals"],
  ["Only Shallow", "My Bloody Valentine"]
  ], "Danger Mouse", "My Playlist");

addMultipleArtistList([
  ["Hang On To Your Ego","The Beach Boys"],
  ["A Man Needs A Maid","Neil Young"],
  ["Gimme Danger","Iggy And The Stooges"],
  ["Moonage Daydream","David Bowie"],
  ["I Fought The Law","The Clash"],
  ["Hiding All Away","Nick Cave & The Bad Seeds"],
  ["It Serves You Right To Suffer","John Lee Hooker"],
  ["The Desperate Kingdom of Love","PJ Harvey"],
  ["Flugufrelsarinn","Sigur R—s"],
  ["Three Days","Janes Addiction"]
  ], "Dave Gahan (Depeche Mode)", "My Playlist");