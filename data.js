var data = [];
var qnumber = 1;

function addSingleArtistList(trackList, artistName, selector, group) {
  for (item in trackList) {
    data.push({track: trackList[item], artist:artistName, number:qnumber, selector: selector, group:group});
    qnumber++;
  }
}

// P66
addSingleArtistList(["Golden Slumbers", "Sexy Sadie", "For No One", "Magical Mystery Tour", "Cry Baby Cry",
  "Taxman", "Strawberry Fields Forever", "Paperback Writer", "Here Comes The Sun", "Carry That Weight"],
  "The Beatles", "Nicky Wire", "The Beatles")
/*
// P67
var dangermouse = [
  ["One of these Days", "Pink Floyd"]
  ];
for (item in dangermouse) {
    data.push({track});
}
*/