# Simple-helpers validations

set of functions and Higher order functions to compose validations in a more readable way


## Example

```js
import {and, or, isNumber, hasDigits, isString, match } from '@simple-helpers/validations';

// Do not Use this regex in PROD. this is a simplified version only for demostration
const looksLikeACreditCard = match("^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$|^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$");


const validate = or(
        and(
          isNumber,
          len(16)
        ),
        and(
          isString,
          looksLikeACreditCard
        )
    )


const test1 = validate(4534567890123456); // true
const test2 = validate("4534 5678 9012 3456"); // true

const test3 = validate(453456789012345); // false number with less than 16 digits
const test4 = validate("4534 5678 9012 34"); // false: string with the wrong format
const test5 = validate("453-567-901-345"); // false: string with the wrong format

```

## Instalation

`npm i @simple-helpers/validations`


