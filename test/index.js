const wmic = require('../node-wmic');
const assert = require('assert');

describe('Test', () => {
    describe('Test All', () => {
        it('Test disk', () => {
            return wmic.disk().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Access'), true);
                assert.equal(result.hasOwnProperty('VolumeSerialNumber'), true);
            })
        });
        it('Test cpu', () => {
            return  wmic.cpu().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('AddressWidth'), true);
                assert.equal(result.hasOwnProperty('VoltageCaps'), true);
            })
        });
        it('Test baseboard', () => {
            return  wmic.baseboard().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Caption'), true);
                assert.equal(result.hasOwnProperty('Width'), true);
            })
        });
        it('Test bios', () => {
            return  wmic.bios().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('BiosCharacteristics'), true);
                assert.equal(result.hasOwnProperty('Version'), true);
            })
        });
        it('Test os', () => {
            return  wmic.os().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('BootDevice'), true);
                assert.equal(result.hasOwnProperty('WindowsDirectory'), true);
            })
        });
        it('Test memorychip', () => {
            return  wmic.memorychip().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Attributes'), true);
                assert.equal(result.hasOwnProperty('Version'), true);
            })
        });
        it('Test diskdrive', () => {
            return  wmic.diskdrive().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Availability'), true);
                assert.equal(result.hasOwnProperty('TracksPerCylinder'), true);
            })
        });
    });
});
