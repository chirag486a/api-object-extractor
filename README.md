# Object Property Extractor

## What it does?

This JS code will will simply take out whatever property value you will require from object . It will be mostly use in **API Response** after call is made.
<br />
<br />

### Start Using by importing module,

`import { extractData } from "ApiObjectExtract.js"`

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
  property1 {
    key: value,
    key2: value
  },
  property2 {
    key3: value,
    key4: value,
    key5: {
      key6: value
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

1. First [ ] or ( array ) like Object in example above
2. Second [ [ 'First-Element-In-Array' ] ] like property2
3. Third [ [ 'First-Element-In-Array', [ 'key5' ] ] ] like Object.property2.key5
4. Fourth [ [ 'First-Element-In-Array', [ 'key5' , [ 'key6' ] ] ] ] which means Object.property2.key5.key6
