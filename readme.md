# node-wmic

A Node.js wrapper around the WMIC. Transform every WMIC command output to JavaScript array.

```js
var wmic = require('node-wmic');
```

## Install

```
npm install node-wmic --save
```

## Example

```js
const wmic = require('node-wmic');
wmic.CPU().then(([cpu]) => {
  console.log(cpu.AddressWidth);
  console.log(cpu.Level);
});

wmic.DiskDrive().then(items => {
  console.log(items.length);
  console.log(items[0].Description);
});
```
