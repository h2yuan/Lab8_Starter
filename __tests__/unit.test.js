// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber Test1', () => {
    // TODO
    expect(functions.isPhoneNumber('(888)888-888-8888')).toBe(true);
});

test('isPhoneNumber Test2', () => {
    // TODO
    expect(functions.isPhoneNumber('888-888-8888')).toBe(true);
});

test('isPhoneNumber Test3', () => {
    // TODO
    expect(functions.isPhoneNumber('(888)888-88-8888')).toBe(false);
});

test('isPhoneNumber Test4', () => {
    // TODO
    expect(functions.isPhoneNumber('(88)888-888')).toBe(false);
});

test('isEmail Test1', () => {
    // TODO
    expect(functions.isEmail('aaa@aaa.aaa')).toBe(true);
});

test('isEmail Test2', () => {
    // TODO
    expect(functions.isEmail('a@a.aa')).toBe(true);
});

test('isEmail Test3', () => {
    // TODO
    expect(functions.isEmail('aaaaaaaa')).toBe(false);
});

test('isEmail Test4', () => {
    // TODO
    expect(functions.isEmail('aaa@aaa.aaaaaaa')).toBe(false);
});

test('isStrongPassword Test1', () => {
    // TODO
    expect(functions.isStrongPassword('aaaaaaaaaaaa')).toBe(true);
});

test('isStrongPassword Test2', () => {
    // TODO
    expect(functions.isStrongPassword('aaaaa')).toBe(true);
});

test('isStrongPassword Test3', () => {
    // TODO
    expect(functions.isStrongPassword('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});

test('isStrongPassword Test4', () => {
    // TODO
    expect(functions.isStrongPassword('aa')).toBe(false);
});

test('isDate Test1', () => {
    // TODO
    expect(functions.isDate('0/0/0000')).toBe(true);
});

test('isDate Test2', () => {
    // TODO
    expect(functions.isDate('00/00/0000')).toBe(true);
});

test('isDate Test3', () => {
    // TODO
    expect(functions.isDate('0/0/00000')).toBe(false);
});

test('isDate Test4', () => {
    // TODO
    expect(functions.isDate('000/0/0000')).toBe(false);
});

test('isHexColor Test1', () => {
    // TODO
    expect(functions.isHexColor('aaa')).toBe(true);
});

test('isHexColor Test2', () => {
    // TODO
    expect(functions.isHexColor('111111')).toBe(true);
});

test('isHexColor Test3', () => {
    // TODO
    expect(functions.isHexColor('')).toBe(false);
});

test('isHexColor Test4', () => {
    // TODO
    expect(functions.isHexColor('a1a1a1a1a1a1a1')).toBe(false);
});