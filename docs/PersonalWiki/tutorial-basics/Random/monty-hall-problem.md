---
sidebar_position: 1
---

# Monty Hall Problem

## Problem

Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

## Solution (simulation approach)

```js
const NUMBER_OF_SIMULATIONS = 1000000;

let successWhenNoChange = 0;
let successWhenChange = 0;

for (let i = 0; i < NUMBER_OF_SIMULATIONS; i++) {
  if (simulateGame(false)) {
    successWhenNoChange++;
  }
  if (simulateGame(true)) {
    successWhenChange++;
  }
}

const probWhenNoChange = `${
  (successWhenNoChange / NUMBER_OF_SIMULATIONS) * 100
}%`;
const probWhenChange = `${(successWhenChange / NUMBER_OF_SIMULATIONS) * 100}%`;

console.log({ probWhenNoChange, probWhenChange });

function simulateGame(changeDoor: boolean): boolean {
  const treasureIndex = Math.floor(Math.random() * 3);
  const chosenIndex = Math.floor(Math.random() * 3);

  if (!changeDoor) {
    return treasureIndex === chosenIndex;
  }

  const gamehostIndex = getGamehostIndex(treasureIndex, chosenIndex);

  const newChosenIndex = [0, 1, 2].filter((i) => {
    if (i === chosenIndex || i === gamehostIndex) {
      return false;
    }
    return true;
  })[0];

  return treasureIndex === newChosenIndex;
}

function getGamehostIndex(treasureIndex: number, chosenIndex: number): number {
  const options = [0, 1, 2];
  const availOptions = options.filter((i) => {
    if (i === treasureIndex || i === chosenIndex) {
      return false;
    }
    return true;
  });
  if (availOptions.length === 2) {
    return availOptions[Math.floor(Math.random() * 2)];
  }
  return availOptions[0];
}
```

It turns out there is a 1/3 probability of winning the car when not changing door. When changing door there is a 2/3 probability of winning the car.

[Link to sandbox environment](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAcgVQLICECiAlA+geQGJYDKAkkggDICCAKsTnITALwwCMADJ1wFDcA2AU1gQArsGACIEAOoALAWDggAwrICGYAOYDmMdvyExR4yTPlhVG7bv3cAZiABOMABSDYASxsBuGF4A88Mjo2PhEpBQ0dAy+HgDUcQCUMADe3DAZmR52rhAeALYifGpQAgDiavkCLnZqfBACiclpma1txhJScgpKlloCCeltAL5DrdkueYXFpRVVLlCOIo2JLW3rHabdFur9g+ujo9ygkLAADo4gAEbbvbvWLAAGACQpk2KdZj0q9zoA9EFUJhcAQSGQqLR6IREgAqDjsYYAUkex3A0BgF2u2z6DxgLzemy65hx-0QQNCoIiEOi0JhbE4SJRqMgIEEADo+CBNC4UpibuY7lYBAAaDGXfkKEnDRK8OwiMDAKAecBGApFErlSrVYC-AAiICcAC4YFcDYINIljabWQINKkxpkTujFrbRI4BMQwAATAQAD10SBKsjZdk5ThcgagwccGi9IHyLmSdIAzDL1k7YDqQA0wJ6ff6WJHg6GDY4I0G2THvfHEzAUzKHRlsq4AIQ6oX6pzNRvrGDuqAiRxgGAutRuj3ev3MJgsLM5vN+ntHdNo2CaLWybNQBcFmDaKBzASb6A7hbuseDif50VzhQ7hsr04wMACADuqmzd8nu4A2uxRawooAEwALohh4fClGWXhMAAfPavZtM2LgwTOMC3rm34wAAPthfjTiw65VMe27ft2iEUX2QiDsOtT1AIPYHIxbT9jRI5LAxByJH+IG8OsrFDuxrqXjuBHPm+H7zt+3BHHKCpKiq+6HiRp6juOO7GmAIj5FcAiODex5fvmmnabpjiWs+pl6QhbQZjAIBnApkC6H+AHAbxj7omoABuagQTgjnKs5LAOU5EDgZBekocw8FrJRyGoSwakiVhuH4TOs6GZh+bkZRvYCbRdQNMxrSjHlVEDoJizLEuaZITkLg+X5fABWFHIKJoUZiUBuWUQVMBNf5gVoj+RYhmGZZjVWcYJkmMA9R5Iw9v1g0tcNkA8TJQA)
