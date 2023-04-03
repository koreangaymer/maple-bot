const percentage = require("../eventSourceCode/starForcePercentage");
const boomPercentage = require("../eventSourceCode/sfBoom");

function mesoCost(itemLevel, currentStar) {
  if (currentStar < 10) {
    return Math.round(
      (100 *
        Math.round(Math.pow(itemLevel, 3)) *
        Math.pow(currentStar + 1, 1)) /
        2500 +
        10
    );
  } else if (currentStar < 15) {
    return Math.round(
      (100 *
        Math.round(Math.pow(itemLevel, 3)) *
        Math.pow(currentStar + 1, 2.7)) /
        40000 +
        10
    );
  } else if (currentStar < 25) {
    return Math.round(
      (100 *
        Math.round(Math.pow(itemLevel, 3)) *
        Math.pow(currentStar + 1, 2.7)) /
        20000 +
        10
    );
  }
}

function averageCost(itemLevel, currentStar, desiredStar) {
  let mesoPerTap = mesoCost(itemLevel, currentStar);
  let totalCost = mesoPerTap;
  let count = 1;
  let totalBoom = 0;
  while (currentStar < desiredStar) {
    let boom = boomPercentage.boomPercentage[currentStar];
    let percent = percentage.starForcePercentage[currentStar];
    random = Math.floor(Math.random() * 100) + 1;
    boomRandom = Math.floor(Math.random() * 100) + 1;
    if (currentStar < 10) {
      if (random >= percent) {
        totalCost += mesoPerTap;
        currentStar = currentStar;
      } else if (random <= percent) {
        totalCost += mesoPerTap;
        currentStar += 1;
        mesoPerTap = mesoCost(itemLevel, currentStar);
      }
    } else if (currentStar === 10) {
      if (random >= percent) {
        totalCost += mesoPerTap;
        currentStar = 10;
      } else if (random <= percent) {
        totalCost += mesoPerTap;
        currentStar += 1;
        mesoPerTap = mesoCost(itemLevel, currentStar);
      }
    } else if (currentStar === 15) {
      if (random >= percent) {
        totalCost += mesoPerTap;
        if (boomRandom <= boom) {
          currentStar = 12;
          totalBoom += 1;
        } else {
          currentStar = 15;
        }
      } else if (random <= percent) {
        totalCost += mesoPerTap;
        currentStar += 1;
        mesoPerTap = mesoCost(itemLevel, currentStar);
      }
    } else if (currentStar === 20) {
      if (random >= percent) {
        totalCost += mesoPerTap;
        if (boomRandom <= boom) {
          currentStar = 12;
          totalBoom += 1;
        } else if (boomRandom >= boom) {
          currentStar = 20;
        }
      } else if (random <= percent) {
        totalCost += mesoPerTap;
        currentStar += 1;
        mesoPerTap = mesoCost(itemLevel, currentStar);
      }
    } else if (currentStar > 10 || currentStar > 20) {
      if (random >= percent) {
        totalCost += mesoPerTap;
        if (boomRandom <= boom) {
          currentStar = 12;
          totalBoom += 1;
        } else {
          currentStar -= 1;
        }
      } else if (random <= percent) {
        totalCost += mesoPerTap;
        currentStar += 1;
        mesoPerTap = mesoCost(itemLevel, currentStar);
      }
    }
    count += 1;
  }
  totalCost = Math.ceil(totalCost / 100) * 100;
  return { currentStar, totalCost, count, totalBoom };
}
function readableNumber(num) {
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1).replace(/.0$/, "") + "T";
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/.0$/, "") + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/.0$/, "") + "K";
  }
  return num;
}

function avgMedRange(itemLevel, currentStar, desiredStar, totalTrials) {
  let trialCount = 0;
  let cost = 0;
  let totalBoom = 0;
  let medianCost = [];
  let tap = 0;
  for (trialCount = 0; trialCount < totalTrials; trialCount++) {
    let calulator = averageCost(itemLevel, currentStar, desiredStar);
    cost += calulator.totalCost;
    tap += calulator.count;
    totalBoom += calulator.totalBoom;
    medianCost.push(calulator.totalCost);
  }
  const nthElement = (arr, n = 0) => (n > 0 ? arr[n - 1] : arr[arr.length + n]);
  const average = readableNumber(cost / totalTrials);
  const median = readableNumber(
    nthElement(medianCost, trialCount / 2) +
      nthElement(medianCost, trialCount / 2 + 1)
  );
  const averageTap = Math.round(tap / totalTrials);
  const averageBoom = Math.round(totalBoom / totalTrials);
  return {averageTap, average, median, totalBoom, averageBoom, trialCount };
}

module.exports = {
    avgMedRange,
};

const math = avgMedRange(200, 20, 22, 1000);
