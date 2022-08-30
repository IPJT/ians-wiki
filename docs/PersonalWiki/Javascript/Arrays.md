---
sidebar_position: 2
---

# Arrays

## Basics

### init

slice(mutate?, return?)
splice (mutates?, return?)

## Async filtering

If we have an array that we would like to filter using an async filter function the following **does not** work:

```js
async function isEven(num) {
  return num % 2 == 0;
}

const filteredArrayFail1 = [1, 2, 3, 4, 5, 6].filter((num) => isEven(num));
console.log(filteredArrayFail1); //prints: [1, 2, 3, 4, 5, 6]

const filteredArrayFail2 = [1, 2, 3, 4, 5, 6].filter(
  async (num) => await isEven(num)
);
console.log(filteredArrayFail2); //prints: [1, 2, 3, 4, 5, 6]
```

This is due to the callback functions `(num) => isEven(num)` and `async (num) => await isEven(num)` being resolved as promises for all elements in the array. Due to a promise being thruthy, no filtering takes place.

Instead, we use the following approach to achieve the wanted filtering.

1. Use map() to project each element in the array into a promise that resolves to either the element value or an empty array (depending on the filtering function)
2. Await all the promises within the array using `await Promise.all(array)`
3. Use flat() to get rid of the empty arrays within the array

This is shown in the code snippet below (which could be condensed).

```js
async function isEven(num) {
  return num % 2 == 0;
}

const promiseArray = [1, 2, 3, 4, 5, 6].map(async (num) => {
  if (await isEven(num)) {
    return num;
  }
  return [];
});
console.log(promiseArray); //prints array of 6 promises

const awaitedPromiseArray = await Promise.all(promiseArray);
console.log(awaitedPromiseArray); //prints: [[], 2, [], 4, [], 6]

const filteredArray = awaitedPromiseArray.flat();
console.log(filteredArray); //prints: [2,4,6]
```

See the code above in [this TS playground](https://www.typescriptlang.org/play?module=1#code/MYewdgzgLgBAtgTwOoCcCGAHDBTFAxAVzGCgEtwYBeGNCBYmACgEoqA+GAbwChuZ+BtesBgAzIiXJgYpCAFEAbtjCMwBOKx4DtOlNigEU0tXBgBSGACYq1AAx8dAX146YoSLFGkANlFzYAEwBBFHQEPDQfAEZqAG0ogBorJIBmJIAWJIBWJIA2AF0AOi9fXFV1dhl5JRUTZmYHbXcIEG9sQu8QAHNGEr89YNC0cMjvKNYAegmMFFIwKAgALhh4pMtUjOy8-JcdZs8ffsCQsIifazjE5Jg0mEyYHJgC4sOyoQYTSrQAd0jYWUUynKGgarmarXanR6fX8g1Oo0sk2ms3mSxWV3WN02D22vEaAn2MBmIDgsmwJ2GVHRaw2dy2TyKcEwjHeIk+lA4WlcOlIoiYPz+VUBtXU9S53IlMD0BiMMBM+IlzklAmlhmksR2rkcoL24BabQ63UYxNJEHJQwQSJmcwWNAtMBAfNyRJQJLJEF2TT1sAFpD8AQACq7TeawlTfbAg26zYU0N5vMbg2SKZaFW49RDDT0I4EoyGU1aUQtlrENTSVvlsWWGTBPQTvWJXgMU+Hfn7c0mzSnit40FAWGnwQaob0m8cLYWbWjYutMgU8Y4ANy8RCoTA4fASMjgAfcIA)
