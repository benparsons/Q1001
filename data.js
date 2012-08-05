var data = [];
var qnumber = 1;
var beatles = ["Golden Slumbers", "Sexy Sadie", "For No One", "Magical Mystery Tour", "Cry Baby Cry",
  "Taxman", "Strawberry Fields Forever", "Paperback Writer", "Here Comes The Sun", "Carry That Weight"];

for (item in beatles) {
  data.push({track: beatles[item], artist:"The Beatles", number:qnumber, selector: "Nicky Wire", group:"The Beatles"});
  qnumber++;
}
/*
data.push({track: "Golden Slumbers", artist:"The Beatles", number:1, selector: "Nicky Wire", group:"The Beatles"})
data.push({track: "Sexy Sadie", artist:"The Beatles", number:2, selector: "Nicky Wire", group:"The Beatles"})
*/
/*
for (var i = 0; i < 500; i++) {
  data[i] = {
    title: "Task " + i,
    duration: "5 days",
    percentComplete: Math.round(Math.random() * 100),
    start: "01/01/2009",
    finish: "01/05/2009",
    effortDriven: (i % 5 == 0)
  };
}
*/