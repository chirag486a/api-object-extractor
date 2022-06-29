# Object Property Extractor

## What it does?

This JS code will will simply take out whatever property value you will require from object . It will be mostly use in **API Response** after call is made.
<br />
<br />

### Start Using by importing module,

```
import { extractData } from "ApiObjectExtract.js"
```

---

## How To Use

**extractData** is a funciton requires 2 parameter

1. ( **Object** )

2. ( **[ Required Property value ]** )

Object will be the object from which you want to take out property

Required value will be the value which you will need from object. And It should provided to function using certain syntax
<br />
<br />

### 1. While property is direct child of object

1. [ 'property' ]
2. [ 'property1' , 'property2', 'property3' , '...']

Property Name should be in array
<br />

### 2. While property is in form nested object

#### For example

```javascript
object {
  property: "value",
  property1 {
    key: "key",
    key2: "key2"
  },
  property2 {
    key3: "key3",
    key4: "key4",
    key5: {
      key6: "key6"
    }
  }
}
```

This is how object looks like and if i would need

```javascript
// concept is clear for value within nested obejct
// use nested array 1st element will be object
// second will be the same array value like how you used in section 1

// For key2
const required = [["property1", ["key2"]]];

// For key6
const required2 = [["property", ["key5", ["key6"]]]];

// if you are not getting  like the hell do i care

extractData(object, required);
extractData(object, required2);
```

key concept

1. First <mark style="background-color: purple; color: white; padding: 3px; margin: 4px;">[ ]</mark> or ( array ) is <mark style="background-color: pink">Object</mark> in example above
2. Second [ <mark style="background-color: purple; color: white; padding: 3px; margin: 4px;">[ 'Property2' ]</mark> ] is <mark style="background-color: pink">Object.property2</mark>
3. Third [ <mark style="background-color: purple; color: white; padding: 3px; margin: 4px;">[ 'Property2', [ 'key5' ] ]</mark> ] is Object.<mark style="background-color: pink">property2.key5</mark>
4. Fourth [ [ 'Property2', <mark style="color: white; background-color: purple; padding: 3px; margin: 4px;">[ 'key5' , [ 'key6' ] ]</mark> ] ] which means <mark style="background-color: pink">Object.property2.key5.key6</mark>

### 3. When your property is inside array

syntax :

```javascript
// [['ArrayProperty', index, ["requiredProperty1", "requiredProperty2"]]]
```

```javascript
object {
  property: "value"
  property1: {
    key: "key",
    key2: "key2"
  },
  property2: {
    key3: "key3",
    key4: "key4",
    key5: {
      key6: "key6"

    }
  }
  property3: {
      key7: [
        0 : { 0: "yes", 1: "No" },
        0 : { 0: "No", 1: "Yes" },

      ]
  }
  property: [
    0: { name: "jonas", lastName: "kafle" },
    1: { name: "you", lastName: "shrestha" },
    2: { name: "john", lastName: "bhandari"},
    3: { name: "Rahul", lastName: "Niroula"}
  ]

}
```

I would want Object.property[2].name & Object.property[2].lastName but how, Here's how I would take out...

[ [ 'property', 4, [ 'name', 'lastName' ] ] ]

If I want **key7[0].0 and key[0].1**

[ [ "property3", [ "key7", 0, [ 0, 1 ] ] ] ]
