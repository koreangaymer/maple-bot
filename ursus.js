const { DateTime } = require("luxon");

let time = DateTime.now();
const unix = time.valueOf();
const discordUnix = Math.floor(unix / 1000);
const korea = DateTime.fromMillis(unix)
  .setLocale("en-US")
  .setZone("Asia/Seoul", { keepLocalTime: true });
const vsKorea = DateTime.fromMillis(unix)
  .setLocale("en-US")
  .setZone("Asia/Seoul");
let timeDifference = time
  .diff(korea, ["hours", "minutes", "seconds"])
  .toObject();
let ursusStart = korea;
let ursusEnd = korea;
if (vsKorea.hour >= 13 && vsKorea.hour < 23) {
  ursusStart = ursusStart
    .set({ hour: 13 })
    .set({ minutes: 0 })
    .setZone("Asia/Seoul")
    .plus({ day: 1 });

  ursusEnd = ursusEnd
    .set({ hour: 23 })
    .set({ minutes: 0 })
    .setZone("Asia/Seoul")
    .plus({ day: 0 });
} else if (vsKorea.hour < 13) {
  ursusStart = ursusStart
    .set({ hour: 13 })
    .set({ minutes: 0 })
    .setZone("Asia/Seoul")
    .plus({ day: 0 });
}
const timeDiffEnd = ursusEnd
  .diff(vsKorea, ["hours", "minutes", "seconds"], {
    conversionAccuracy: "longterm",
  })
  .toObject();
const timeDiffStart = ursusStart
  .diff(vsKorea, ["hours", "minutes", "seconds"], {
    conversionAccuracy: "longterm",
  })
  .toObject();
const timeDiffFromKorea = vsKorea.diff(korea, ["hours", "minutes", "seconds"], {conversionAccuracy: "longterm"}).toObject();
const timeInKorea = vsKorea.toFormat("EEEE, DDD  h:mm a");
// console.log(
//   `Time until ursus ends: ${timeDiffEnd.hours} hours and ${timeDiffEnd.minutes} minutes.`
// );
// console.log(`Time until ursus starts: ${timeDiffStart.hours} hours and ${timeDiffStart.minutes} minutes.`);
// console.log(`Time in korea: ${timeInKorea}`);
ursusStart = ursusStart.toFormat("EEEE, DDD h:mm a");
ursusEnd = ursusEnd.toFormat("EEEE, DDD h:mm a");
// console.log(unix)
// console.log(discordUnix)
// console.log(timeDiffFromKorea)


// we need discordUnix, timeDiffEnd, timeDiffStart, timeInKorea, ursusStart, ursusEnd

module.exports = {discordUnix, timeDiffEnd, timeDiffStart, timeInKorea, ursusStart, ursusEnd}