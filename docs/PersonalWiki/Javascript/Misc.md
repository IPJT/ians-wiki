---
sidebar_position: 3
---

# Misc

## Logging behaviour in browsers (logging objects that are mutated)

See this [link](https://www.freecodecamp.org/news/mutating-objects-what-will-be-logged-in-the-console-ffb24e241e07/)

## The difference between || (logical or operator) and ?? (nullish coalescing operator) operators in Javascript & NodeJS

In short, the difference between the two operators comes down to the difference between falsy and null/undefined. The nullish coalescing operator (??) takes the right operand only when the left side is set to null or undefined whereas the the logical or operator (||) takes the right operand in the case of a falsy value — which includes empty string, 0, false, NaN, etc. Having said that, we could think of the ?? operator as subset of the ||.
if
![A few examples that showcases the differences](/img/logical_or_operator.png)
