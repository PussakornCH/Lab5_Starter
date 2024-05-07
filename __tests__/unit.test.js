// unit.test.js
import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
  } from '../code-to-unit-test/unit-test-me';
  
  describe('Validation Functions', () => {
    // Tests for isPhoneNumber
    describe('Phone Number Validation', () => {
      test('Validates correct phone number with area code', () => {
        expect(isPhoneNumber('(123) 456-7890')).toBe(true);
      });
      test('Validates correct phone number without area code', () => {
        expect(isPhoneNumber('456-7890')).toBe(true);
      });
      test('Rejects incorrect phone number format', () => {
        expect(isPhoneNumber('123-45-6789')).toBe(false);
      });
      test('Rejects alphanumeric string', () => {
        expect(isPhoneNumber('123-45AB-6789')).toBe(false);
      });
    });
  
    // Tests for isEmail
    describe('Email Validation', () => {
      test('Validates correct email', () => {
        expect(isEmail('test@example.com')).toBe(true);
      });
      test('Validates correct email', () => {
        expect(isEmail('test@gmail.com')).toBe(true);
      });
      test('Rejects email without domain', () => {
        expect(isEmail('test@')).toBe(false);
      });
      test('Rejects plain string', () => {
        expect(isEmail('test')).toBe(false);
      });
    });
  
    // Tests for isStrongPassword
    describe('Password Strength Validation', () => {
      test('Validates strong password', () => {
        expect(isStrongPassword('A1b2C3d4')).toBe(true);
      });
      test('Validates minimal strong password', () => {
        expect(isStrongPassword('A1b_')).toBe(true);
      });
      test('Rejects too short password', () => {
        expect(isStrongPassword('A1b')).toBe(false);
      });
      test('Rejects long password without letters', () => {
        expect(isStrongPassword('1234567890123456')).toBe(false);
      });
    });
  
    // Tests for isDate
    describe('Date Validation', () => {
      test('Validates correct date format', () => {
        expect(isDate('12/31/2024')).toBe(true);
      });
      test('Validates minimal date format', () => {
        expect(isDate('1/1/2024')).toBe(true);
      });
      test('Rejects incorrect date format', () => {
        expect(isDate('Hello/12/2024')).toBe(false);
      });
      test('Rejects string without date', () => {
        expect(isDate('Hello World')).toBe(false);
      });
    });
  
    // Tests for isHexColor
    describe('Hex Color Code Validation', () => {
      test('Validates 3-character hex code', () => {
        expect(isHexColor('#abc')).toBe(true);
      });
      test('Validates 6-character hex code', () => {
        expect(isHexColor('#a1b2c3')).toBe(true);
      });
      test('Rejects incomplete hex code', () => {
        expect(isHexColor('#a1')).toBe(false);
      });
      test('Rejects non-hex characters', () => {
        expect(isHexColor('#gggggg')).toBe(false);
      });
    });
  });
  