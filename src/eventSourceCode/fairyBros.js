const { DateTime } = require("luxon");
// const startYear = 2023;
// const startMonth = 3;
// const startDay = 2;
// const endYear = 2023;
// const endMonth = 6;
// const endDay = 14;
// const totalDays = 91;
const koreaUnix = DateTime.now()
    .setLocale("en-US")
    .valueOf();
const vsKorea = DateTime.fromMillis(koreaUnix).setLocale("en-US").setZone("Asia/Seoul");


function fairyBros(startYear, startMonth, startDay, endYear, endMonth, endDay, totalDays){
    let fairyBrosStart = vsKorea.set({year: startYear, month: startMonth, day: startDay, hour: 0, minute: 0, second: 0});
    let fairyBrosEnd = vsKorea.set({year: endYear, month: endMonth, day: endDay, hour: 0, minute: 0, second: 0});
    let difference = (fairyBrosEnd.diff(fairyBrosStart, ["days"]).toObject().days - totalDays + 1);
    let timeStart = Math.ceil(fairyBrosStart.valueOf() / 1000);
    let timeEnd = Math.ceil(fairyBrosEnd.valueOf() / 1000);
    return {difference, timeStart, timeEnd};
}

// console.log(fairyBros(startYear, startMonth, startDay, endYear, endMonth, endDay, totalDays));

module.exports = {
    fairyBros,
};