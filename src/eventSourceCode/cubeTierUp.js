const tierPercent = require("../eventSourceCode/cubingStats");
const tierCost = require("../eventSourceCode/cubingStats");
const itemPercent = require("../eventSourceCode/cubingStats");
const calculator = require("../eventSourceCode/cubingStats");

// const desiredCube = "black";
// const item = "badge";
// const special = 64;
//! meso = 1, item = 1, combined = 20
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
function averageCost(startingTier, desiredTier, cube) {
  const costPerCube = tierCost.cost[cube];
  let totalCost = costPerCube;
  let count = 1;
  while (startingTier != desiredTier) {
    let random = Math.random() * 100 + 1;
    let tierUp = tierPercent.tierUp[startingTier];
    if (startingTier === "rare") {
      if (random >= tierUp) {
        startingTier = "rare";
      } else if (random <= tierUp) {
        startingTier = "epic";
      }
    } else if (startingTier === "epic") {
      if (random >= tierUp) {
        startingTier = "epic";
      } else if (random <= tierUp) {
        startingTier = "unique";
      }
    } else if (startingTier === "unique") {
      if (random >= tierUp) {
        startingTier = "unique";
      } else if (random <= tierUp) {
        startingTier = "legendary";
      }
    }
    count++;
    totalCost += costPerCube;
    //console.log(`Starting Tier: ${startingTier} Cubes: ${count} Cost: ${totalCost}`);
  }
  return { totalCost, startingTier, count };
}

function probability(lineOne, lineTwo, lineThree) {
  let firstItemPercent =
    itemPercent.itemPercent[desiredCube][item]["1"][lineOne];
  let secondItemPercent =
    itemPercent.itemPercent[desiredCube][item]["2"][lineTwo];
  let thirdItemPercent =
    itemPercent.itemPercent[desiredCube][item]["3"][lineThree];
  firstItemPercent = firstItemPercent / 100;
  secondItemPercent = secondItemPercent / 100;
  thirdItemPercent = thirdItemPercent / 100;
  let overallProbability =
    firstItemPercent * secondItemPercent * thirdItemPercent;
  //console.log(overallProbability);
  return overallProbability;
}

function lineCalculator(item, line) {
  let lineOne, lineTwo, lineThree;
  if (item == "hat") {
    const number1 = calculator.probability["hat"][line][1];
    const number2 = calculator.probability["hat"][line][2];
    const number3 = calculator.probability["hat"][line][3];
    if (line == 2) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 3) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 4) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 5) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 6) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 14) {
      if (
        probability(number1, number2, number3) >
        probability(number2, number1, number3)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number2;
        lineTwo = number1;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 11) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 26) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 23) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 15) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 12) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 16) {
      if (
        probability(number1, number2, number3) >
          probability(number1, number3, number2) ||
        probability(number1, number2, number3) >
          probability(number3, number1, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else if (
        probability(number1, number3, number2) >
          probability(number1, number2, number3) ||
        probability(number1, number3, number2) >
          probability(number3, number1, number2)
      ) {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number3;
        lineTwo = number1;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 13) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    }
  } else if (item == "gloves") {
    const number1 = calculator.probability["gloves"][line][1];
    const number2 = calculator.probability["gloves"][line][2];
    const number3 = calculator.probability["gloves"][line][3];
    if (line == 1) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 2) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 3) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 13) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 10) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 14) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 11) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    }
  } else if (item == "accessory") {
    const number1 = calculator.probability["accessory"][line][1];
    const number2 = calculator.probability["accessory"][line][2];
    const number3 = calculator.probability["accessory"][line][3];
    if (line == 1) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 2) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 3) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 13) {
      if (
        probability(number1, number2, number3) >
        probability(number2, number1, number3)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number2;
        lineTwo = number1;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 10) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 14) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 11) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 25) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 22) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 20) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 40) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 52) {
      if (
        probability(number1, number2, number3) >
          probability(number3, number1, number2) ||
        probability(number1, number2, number3) >
          probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else if (
        probability(number3, number1, number2) >
          probability(number1, number2, number3) ||
        probability(number3, number1, number2) >
          probability(number1, number3, number2)
      ) {
        lineOne = number3;
        lineTwo = number1;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      } else if (
        probability(number1, number3, number2) >
          probability(number1, number2, number3) ||
        probability(number1, number3, number2) >
          probability(number3, number1, number2)
      ) {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (line == 49) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 44) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 41) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    }
  } else if (item == "emblem") {
    const number1 = calculator.probability["emblem"][line][1];
    const number2 = calculator.probability["emblem"][line][2];
    const number3 = calculator.probability["emblem"][line][3];
    if (line == 36) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 33) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 30) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 24) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 21) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 61) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 64) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    }
  } else if (item == "weapon") {
    const number1 = calculator.probability["weapon"][line][1];
    const number2 = calculator.probability["weapon"][line][2];
    const number3 = calculator.probability["weapon"][line][3];
    if (line == 36) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 33) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 30) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 24) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 21) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 51) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 54) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 56) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 59) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 61) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 64) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    }
  } else if (item == "secondary") {
    const number1 = calculator.probability["secondary"][line][1];
    const number2 = calculator.probability["secondary"][line][2];
    const number3 = calculator.probability["secondary"][line][3];
    if (line == 36) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 33) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 30) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 24) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 21) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 51) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 54) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 56) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 59) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 61) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (line == 64) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    }
  } else {
    const number1 = calculator.probability["stat"][line][1];
    const number2 = calculator.probability["stat"][line][2];
    const number3 = calculator.probability["stat"][line][3];
    if (x == 36) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (x == 33) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (x == 30) {
      if (
        probability(number1, number2, number2) >
        probability(number1, number1, number3)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number1;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (x == 27) {
      lineOne = number1;
      lineTwo = number2;
      lineThree = number3;
      return { lineOne, lineTwo, lineThree };
    } else if (x == 24) {
      if (
        probability(number1, number1, number3) >
        probability(number1, number2, number2)
      ) {
        lineOne = number1;
        lineTwo = number1;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (x == 21) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    } else if (x == 18) {
      if (
        probability(number1, number2, number3) >
        probability(number1, number3, number2)
      ) {
        lineOne = number1;
        lineTwo = number2;
        lineThree = number3;
        return { lineOne, lineTwo, lineThree };
      } else {
        lineOne = number1;
        lineTwo = number3;
        lineThree = number2;
        return { lineOne, lineTwo, lineThree };
      }
    }
  }
}
function prime(desiredCube, item, line) {
  const costPerCube = tierCost.cost[desiredCube];
  let totalCost = costPerCube;
  const result = lineCalculator(item, line);
  let firstItemPercent =
    itemPercent.itemPercent[desiredCube][item]["1"][result.lineOne];
  let secondItemPercent =
    itemPercent.itemPercent[desiredCube][item]["2"][result.lineTwo];
  let thirdItemPercent =
    itemPercent.itemPercent[desiredCube][item]["3"][result.lineThree];
  let firstLine;
  let secondLine;
  let thirdLine;
  let count = 1;
  while (
    firstLine != result.lineOne ||
    secondLine != result.lineTwo ||
    thirdLine != result.lineThree
  ) {
    let firstRandom = Math.random() * 101;
    if (firstRandom >= firstItemPercent) {
      firstLine = "wrong";
    } else if (firstRandom <= firstItemPercent) {
      firstLine = result.lineOne;
    }
    let secondRandom = Math.random() * 101;
    if (secondRandom >= secondItemPercent) {
      secondLine = "wrong";
    } else if (secondRandom <= secondItemPercent) {
      secondLine = result.lineTwo;
    }
    let thirdRandom = Math.random() * 101;
    if (thirdRandom >= thirdItemPercent) {
      thirdLine = "wrong";
    } else if (thirdRandom <= thirdItemPercent) {
      thirdLine = result.lineThree;
    }
    count++;
    totalCost += costPerCube;
    // console.log(
    //   firstLine,
    //   secondLine,
    //   thirdLine,
    //   count,
    //   readableNumber(totalCost)
    // );
  }
  return { firstLine, secondLine, thirdLine, count, totalCost };
}

function average(desiredCube, item, special) {
  const number = 0;
  const line = special + number;
  const totalTrials = 500;
  let cost = 0;
  let cubes = 0;
  for (trialCount = 0; trialCount < totalTrials; trialCount++) {
    let calulator = prime(desiredCube, item, line);
    cost += calulator.totalCost;
    cubes += calulator.count;
  }
  const average = cost / totalTrials;
  const totalCubes = cubes / totalTrials;
  return { average, totalCubes };
}

function tierAverage(startingTier, desiredTier, cube) {
  const totalTrials = 1000;
  let cost = 0;
  let cubes = 0;
  for (trialCount = 0; trialCount < totalTrials; trialCount++) {
    let calulator = averageCost(startingTier, desiredTier, cube);
    cost += calulator.totalCost;
    cubes += calulator.count;
  }
  const average = readableNumber(cost / totalTrials);
  const totalCubes = readableNumber(Math.ceil(cubes / totalTrials));
  return { average, totalCubes };
}
// const wtf = prime();
// console.log(
//   `${wtf.firstLine} ${wtf.secondLine} ${wtf.thirdLine} ${
//     wtf.count
//   } cubes ${readableNumber(wtf.totalCost)}`
// );

// const result = tierAverage("rare", "legendary", "black");
// console.log(
//   `Total cost: ${readableNumber(result.average)} Total Cubes: ${result.totalCubes}`
// );

// const result = lineCalculator();
// console.log(result.lineOne, result.lineTwo, result.lineThree);

// const hi = average("black", "weapon", 21);
// console.log(readableNumber(hi.average), readableNumber(hi.totalCubes));

module.exports = {
  average,
  tierAverage,
};
