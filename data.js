var data = [];
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