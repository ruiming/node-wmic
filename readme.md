# node-wmic
A Node.js wrapper around the WMIC.
```js
var wmic = require('node-wmic');
```

## Install
```
npm install node-wmic --save
```

## Example
Now it only supports the following usage.

```js
wmic.disk().then(result => {})
wmic.cpu().then(result => {})
wmic.baseboard().then(result => {})
wmic.bios().then(result => {})
wmic.os().then(result => {})
wmic.memorychip().then(result => {})
wmic.diskdrive().then(result => {})
wmic.process().then(result => {});
```

It will return the message that WMIC can provide.
