---
sidebar_position: 1
---

# Objects

## Property identifier

In JavaScript, objects can be seen as a collection of properties. Proerties are identified using key values. A key value is either a String value or a Symbol value.
The code below shows how an object can be created using the object initializer syntax with different ways to declare property names.

```js
const a = "city";
const b = "Stockholm";

const exampleObject = {
  firstName: "Ian", //key is valid JS identifier - will evaluate as sting
  lastName: "Thorslund", //key is a string
  ["age"]: 1, //key is a string
  [a]: b, //a will evaluate as "city" at runtime (see "Computed property names"-section). Note that the value should not be enclosed in brackets to be computed and evaluated as "Sweden"
  [Symbol.for("country")]: "Sweden", //key value is a Symbol value.
};

console.log(Object.getOwnPropertyNames(testObject)); // ["firstName", "lastName", "age", "city"] in which the typeof of each entry is"string"
console.log(Object.getOwnPropertySymbols(testObject)); // [Symbol(country)] in which the typeof of the entry is "symbol"
```

As seen above each property in the created object is identified using a key value that is either a String value or a Symbol value.

## Computed property names

Allows you to put an expression in brackets [], that will be computed and used as the property name.

```js
var a = "b";
var c = { [a]: "d" }; //object initializer syntax
```

is equivalent to:

```js
var a = "b";
var c = {};
c[a] = "d"; //property accessor syntax
```

## Shorthand property names

```js
var s = "abc";
var n = 1;
var o = { s, n }; // This is equivalent to { s: s, n: n }
```
