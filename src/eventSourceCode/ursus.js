const { DateTime } = require("luxon");

const koreaUnix = DateTime.now()
  .setLocale("en-US")
  .setZone("Asia/Seoul")
  .valueOf();
const discordUnix = Math.floor(koreaUnix / 1000);
const vsKorea = DateTime.fromMillis(koreaUnix)
  .setLocale("en-US")
  .setZone("Asia/Seoul");
let ursusStart = vsKorea;
let ursusEnd = vsKorea;
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
  ursusEnd = ursusEnd
    .set({ hour: 23 })
    .set({ minutes: 0 })
    .setZone("Asia/Seoul")
    .plus({ day: 0 });
} else if (vsKorea.hour >= 23) {
  ursusStart = ursusStart
    .set({ hour: 13 })
    .set({ minutes: 0 })
    .setZone("Asia/Seoul")
    .plus({ day: 1 });
  ursusEnd = ursusEnd
    .set({ hour: 23 })
    .set({ minutes: 0 })
    .setZone("Asia/Seoul")
    .plus({ day: 1 });
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
const timeInKorea = vsKorea.toFormat("EEEE, DDD  h:mm a");
ursusStart = ursusStart.toFormat("EEEE, DDD h:mm a");
ursusEnd = ursusEnd.toFormat("EEEE, DDD h:mm a");
module.exports = {
  discordUnix,
  timeDiffEnd,
  timeDiffStart,
  timeInKorea,
  ursusStart,
  ursusEnd,
};
