// Date
const data1 = new Date();
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019,03,06,9,30)

date3.setFullYear(2030);
date2.toDateString();
date2.toTimeString();
date2.toISOString();


console.log(data1, data2, data3)