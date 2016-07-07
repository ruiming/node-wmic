const wmic = require('../node-wmic');
const assert = require('assert');

describe('Test', () => {
    describe('Test All', () => {
        it('function getDisk', () => {
            return wmic.getDisk().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Access'), true);
                assert.equal(result.hasOwnProperty('VolumeSerialNumber'), true);
            })
        });
        it('function getCpu', () => {
            return  wmic.getCpu().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('AddressWidth'), true);
                assert.equal(result.hasOwnProperty('VoltageCaps'), true);
            })
        });
        it('function getBaseboard', () => {
            return  wmic.getBaseboard().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Caption'), true);
                assert.equal(result.hasOwnProperty('Width'), true);
            })
        });
        it('function getBios', () => {
            return  wmic.getBios().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('BiosCharacteristics'), true);
                assert.equal(result.hasOwnProperty('Version'), true);
            })
        });
        it('function getOs', () => {
            return  wmic.getOs().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('BootDevice'), true);
                assert.equal(result.hasOwnProperty('WindowsDirectory'), true);
            })
        });
        it('function getMemorychip', () => {
            return  wmic.getMemorychip().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Attributes'), true);
                assert.equal(result.hasOwnProperty('Version'), true);
            })
        });
        it('function getDiskDrive', () => {
            return  wmic.getDiskDrive().then(result => {
                if (result.length > 1)  result = result[0];
                assert.equal(result.hasOwnProperty('Availability'), true);
                assert.equal(result.hasOwnProperty('TracksPerCylinder'), true);
            })
        });
    });
});
