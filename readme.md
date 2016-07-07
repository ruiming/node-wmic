# node-wmic
A Node.js wrapper around the WMIC
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
wmic.getDisk().then(result => {})
wmic.getCpu().then(result => {})
wmic.getBaseboard().then(result => {})
wmic.getBios().then(result => {})
wmic.getOs().then(result => {})
wmic.getMemorychip().then(result => {})
wmic.getDiskDrive().then(result => {})
```

It will return the message that WMIC can provide.
