'use strict';
const exec = require('child_process').exec,
    iconv = require('iconv-lite');

const cmd = {
    'disk': ['wmic logicaldisk get /VALUE', 40],
    'cpu': ['wmic cpu get /VALUE', 57],
    'baseboard': ['wmic baseboard get /VALUE', 29],
    'bios': ['wmic bios get /VALUE', 31],
    'diskdrive': ['wmic diskdrive get /VALUE', 51],
    'os': ['wmic os get /VALUE', 64],
    'memorychip': ['wmic memorychip get /VALUE', 36]
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
        resolve(result);
    });
}

let func = [];
for (let key in cmd) {
    func[key] = () => {
        return new Promise((resolve, reject) => {
            exec(cmd[key][0], {encoding: 'GB2312'}, (err, stdout, stderr) => {
                if(err) {
                    reject(stedrr);
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
