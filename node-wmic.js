'use strict';
const execFile = require('child_process').execFile,
    iconv = require('iconv-lite'),
    path = require('path');

const cmd = {
    'disk': [['logicaldisk', 'get', '/VALUE'], 40],
    'cpu': [['cpu', 'get', '/VALUE'], 57],
    'baseboard': [['baseboard', 'get', '/VALUE'], 29],
    'bios': [['bios', 'get', '/VALUE'], 31],
    'diskdrive': [['diskdrive', 'get', '/VALUE'], 51],
    'os': [['os', 'get', '/VALUE'], 64],
    'memorychip': [['memorychip', 'get', '/VALUE'], 36],
    'process': [['process', 'get', '/VALUE'], 40]
};

function wmicFormat(stdout, size) {
    return new Promise((resolve, reject) => {
        let reg = /([^\r]+)=(.*)\r/g;
        let result = [];
        let one = {};
        let length = stdout.match(/=/g) && stdout.match(/=/g).length;
        for(let i=0; i<length/size; i++) {
            one = {};
            for(let j=0; j<size; j++) {
                let mat = reg.exec(stdout);
                if(mat != null) {
                    one[mat[1].slice(1)] = mat[2];
                }
            }
            result.push(one);
        }
        // Return object that only has one element all the time, 
        // otherwise return an array.
        if([40, 51, 36].indexOf(size) === -1) {
            resolve(one);
        } else {
            resolve(result);
        }
    });
}

let func = [];
for (let key in cmd) {
    func[key] = () => {
        return new Promise((resolve, reject) => {
            execFile(path.join(process.env.SystemRoot,'System32','wbem', 'WMIC.exe'), cmd[key][0], {encoding: 'GB2312', maxBuffer: 1024 * 500},(err, stdout, stderr) => {
                if(err) {
                    reject(stderr);
                } else {
                    wmicFormat(iconv.decode(stdout, 'GB2312'), cmd[key][1]).then(result => {
                        resolve(result);
                    });
                }
            });
        })
    }
}
module.exports = func;
