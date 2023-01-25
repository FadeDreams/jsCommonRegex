# node-common-regex

A Node.js package that exports functions to validate various types of data using regular expressions.

### Installation

```javascript
npm install jscommonregex
```

### Usage

```javascript
import {
  IsInt,
  IsPositiveInt,
  IsDecimalNum,
  IsNum,
  IsAlphaNumeric,
  IsAlphaNumericWithSpace,
  IsEmail,
  IsGoodPassword,
  IsUsername,
  IsURL,
  IsIPv4,
  IsIPv6,
} from "jscommonregex";

console.log(IsInt(10)); // true
console.log(IsInt("10")); // false
console.log(IsPositiveInt("10")); // true
console.log(IsDecimalNum("10.2")); // true
console.log(IsNum("10.2")); // true
console.log(IsNum("-10.2")); // true
console.log(IsAlphaNumeric("hello123")); // true
console.log(IsAlphaNumericWithSpace("hello 123")); // true
console.log(IsEmail("example@email.com")); // true
console.log(IsGoodPassword("Abcdefg1@")); // true
console.log(IsUsername("john_doe")); // true
console.log(IsURL("https://www.example.com")); // true
console.log(IsIPv4("192.168.0.1")); // true
console.log(IsIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); // true
```

### License

MIT

### Note

Please note that these regular expressions are not foolproof and might not cover all possible cases. They are meant to be used as a basic validation tool and not as a definitive solution.
