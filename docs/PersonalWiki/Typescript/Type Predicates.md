---
sidebar_position: 1
---

# Type Predicates

With the use of type predicates we can change types/narrow them down throughout the code. Consider the following example:

```ts
type Dog = {
  bark: () => void;
};

type Cat = {
  mjau: () => void;
};

function isDog(pet: Dog | Cat): pet is Dog {
  //The return type of the function is a type predicate
  //return type is a type predicate
  return (pet as Dog).bark !== undefined;
}

const randomPet = {} as Dog | Cat;

if (Math.random() < 0.5) {
  (randomPet as Cat).mjau = () => console.log("Mjau");
} else {
  (randomPet as Dog).bark = () => console.log("Wof");
}

if (isDog(randomPet)) {
  randomPet.bark(); //Due to the isDog having a having a return type that is a "type predicate" we know that the "randomPet" is a Dog
} else {
  randomPet.mjau(); //Due to the isDog having a having a return type that is a "type predicate" we know that the "randomPet" is a Cat
}
```

Not declaring the return type as a type predicate implies what is showcased in the following image:
![Without type predicate](/img/type_predicate.png)

[Link to sandbox environment](https://www.typescriptlang.org/play?#code/C4TwDgpgBAIg9gcygXigbwFBWzgRgQwCcBrALigAoBKZAPgDc4BLAEwwF8MNRIoBhfMBTosObAFsAVvgCu5anUasOXAGYyAdgGNgTOBqhMAzvAQVIwcqagAffoKrkLho7ETooAek+EIwGYQGPNDGUPhQwVBgvixMWoIQor7+gZTO+K6mVAB0BCRQAITIqJosEKpMGhBsnBha+kZChPgaLHDiAAp+wmjsYZnudgLAXEyqFACyggAW2c2t7dRQADxQAAzZAKxUmGLYFPNtnd0Z9sA5UrLCS3RQ9RpGcAA2ENlPiBQARBPSMp9UHCgECeRmguz2BxaRy6QlOWVyRGI1yoKFodwaz1e7zMnwA6nBVP8VBgxhRjKZIQtjucdqIxId2jCESQlt4YDJoMA4BFpiETO5pvh6JUkOFBcKNKKoMkAkFwJzBUJQuFPpFotU4glPlAAO7QYgaOA6nmCHnQT4M6na5VuJCA4GgkR7aVQxl+bKXGTUNkciLc4C8lzWcUisJQEOSsMy1KRAOmm2q+VRGKa4AQbV6qAGo0moQB82WmHW1zhYZQDhAA)
