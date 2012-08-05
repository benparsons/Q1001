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
  
addMultipleArtistList([
  ["April Skies","The Jesus & Mary Chain"],
  ["Cheree","Suicide"],
  ["Cherry-Coloured Funk","Cocteau Twins"],
  ["Damaged Goods","Gang of Four"],
  ["Forty-Five Hundred Times","Status Quo"],
  ["Dark Entries","Bauhaus"],
  ["Some Of Them Are Old","Brian Eno"],
  ["Helicon 2","Mogwai"],
  ["Theme For Great Cities","Simple Plan"],
  ["Faith","The Cure"]
  ], "Ian Rankin", "My Playlist");
  
addMultipleArtistList([
  ["Kids","MGMT"],
  ["Oi Oi Oi","Boys Noize"],
  ["The Choice Is Yours","Black Sheep"], // incorrect in mag
  ["Rock Dat Body","Black Eyed Peas"],
  ["Sexy Bitch","David Guetta"],
  ["Black Dog","Led Zeppelin"],
  ["Scenario","A Tribe Called Quest"],
  ["Sex On Fire","Kings Of Leon"],
  ["Pon De Floor","Major Lazor"],
  ["I Gotta Feeling","Black Eyed Peas"]
  ], "Fergie & Apl.de.ap (Black Eyed Peas)", "Party Starters");

addMultipleArtistList([
  ["Stutter","Elastica"],
  ["End Of A Century","Blur"],
  ["Animal Nitrate","Suede"],
  ["Lost Myself","Longpigs"],
  ["Alright","Supergrass"],
  ["Common People","Pulp"],
  ["Kung Fu","Ash"],
  ["Daydreamer","Menswear"],
  ["12 Reasons Why","My Life Story"],
  ["Find The Answer Within","The Boo Radleys"]
  ], "Steve Lamacq", "Britpop");

addMultipleArtistList([
  ["Cry Baby","Janis Joplin"],
  ["White Rabbit","Jefferson Airplane"],
  ["Something's Got A Hold Of Me","Etta James"],
  ["Cloudbusting","Kate Bush"],
  ["Nightclubbing","Grace Jones"],
  ["Ramalama","R—is’n Murphy"],
  ["Earth Intruders","Bjšrk"],
  ["Violet","Hole"],
  ["Over And Over","Madonna"],
  ["I'm Yr Here-I-Am", "Diane Cluck"]
  ], "Florence Welch", "Female Icons");

