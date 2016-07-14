/// <reference path="../typings/index.d.ts" />
/// <reference path="../src/Converters.ts" />

import { expect } from 'chai';
import { Converters } from '../src/Converters';

const s1: string = btoa("tiForms");
const a2: Array<number> = [1,2,3,4,5]; 
const b2: Uint8Array = Uint8Array.from(a2);   

describe('base64', () => {
    describe('base64toUint8Array', () => {
        it('should work with empty string', () => {
            expect(Converters.base64ToUint8Array('')).eql(new Uint8Array(0));
        });
        it('should correctly encode basic example', () => {
            var s2 = Converters.Uint8ArrayToBase64(b2);
            expect(Converters.base64ToUint8Array(s2)).eql(b2);
        });
    });
    describe('Uint8ArraytoBase64', () => {
        it ('should work with empty array', () => {
            expect(Converters.Uint8ArrayToBase64(new Uint8Array(0))).to.be.equal('');
        });
        it('should correctly decode Uint8ArraytoBase64', () => {
            var b1 = Converters.base64ToUint8Array(s1);
            expect(Converters.Uint8ArrayToBase64(b1)).to.be.equal(s1);
        })
    });
    describe('stringToUint8Array', () => {
        it('should work with empty string', () => {
            expect(Converters.stringToUint8Array('')).eql(new Uint8Array(0));
        });
        it('should correctly encode basic example', () => {
            var s2 = Converters.Uint8ArrayToString(b2);
            expect(Converters.stringToUint8Array(s2)).eql(b2);
        });
    });
    describe('Uint8ArrayToString', () => {
        it ('should work with empty array', () => {
            expect(Converters.Uint8ArrayToString(new Uint8Array(0))).to.be.equal('');
        });
        it('should correctly decode Uint8ArrayToString', () => {
            var b1 = Converters.stringToUint8Array('tiForms');
            expect(Converters.Uint8ArrayToString(b1)).to.be.equal('tiForms');
        })
    });


});

