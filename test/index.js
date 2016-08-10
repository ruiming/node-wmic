const wmic = require('../node-wmic');
const assert = require('assert');

describe('Test', () => {
    describe('Test All', () => {
        it('Test disk', () => {
            return wmic.disk().then(result => {
                assert.equal(result[0].hasOwnProperty('Access'), true);
                assert.equal(result[0].hasOwnProperty('VolumeSerialNumber'), true);
            })
        });
        it('Test cpu', () => {
            return  wmic.cpu().then(result => {
                assert.equal(result.hasOwnProperty('AddressWidth'), true);
                assert.equal(result.hasOwnProperty('VoltageCaps'), true);
            })
        });
        it('Test baseboard', () => {
            return  wmic.baseboard().then(result => {
                assert.equal(result.hasOwnProperty('Caption'), true);
                assert.equal(result.hasOwnProperty('Width'), true);
            })
        });
        it('Test bios', () => {
            return  wmic.bios().then(result => {
                assert.equal(result.hasOwnProperty('BiosCharacteristics'), true);
                assert.equal(result.hasOwnProperty('Version'), true);
            })
        });
        it('Test os', () => {
            return  wmic.os().then(result => {
                assert.equal(result.hasOwnProperty('BootDevice'), true);
                assert.equal(result.hasOwnProperty('WindowsDirectory'), true);
            })
        });
        it('Test memorychip', () => {
            return  wmic.memorychip().then(result => {
                assert.equal(result[0].hasOwnProperty('Attributes'), true);
                assert.equal(result[0].hasOwnProperty('Version'), true);
            })
        });
        it('Test diskdrive', () => {
            return  wmic.diskdrive().then(result => {
                assert.equal(result[0].hasOwnProperty('Availability'), true);
                assert.equal(result[0].hasOwnProperty('TracksPerCylinder'), true);
            })
        });
    });
});
