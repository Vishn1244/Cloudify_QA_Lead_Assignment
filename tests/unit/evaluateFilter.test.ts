import { describe, it, expect } from 'vitest';
import { evaluateFilter } from '../../src/filters/evaluateFilter.js';

describe('evaluateFilter', () => {

  describe('equals operator', () => {
    it('returns true when values are equal', () => {
      expect(evaluateFilter('Admin', 'equals', 'Admin')).toBe(true);
    });

    it('returns false when values are different', () => {
      expect(evaluateFilter('Admin', 'equals', 'User')).toBe(false);
    });
  });

  describe('notEquals operator', () => {
    it('returns true when values are different', () => {
      expect(evaluateFilter('Admin', 'notEquals', 'User')).toBe(true);
    });
  });

  describe('contains operator', () => {
    it('returns true when string contains value', () => {
      expect(evaluateFilter('Playwright Automation', 'contains', 'Playwright')).toBe(true);
    });

    it('returns false when string does not contain value', () => {
      expect(evaluateFilter('Playwright Automation', 'contains', 'Selenium')).toBe(false);
    });
  });

  describe('startsWith operator', () => {
    it('returns true', () => {
      expect(evaluateFilter('Cloudify', 'startsWith', 'Cloud')).toBe(true);
    });
  });

  describe('endsWith operator', () => {
    it('returns true', () => {
      expect(evaluateFilter('Cloudify', 'endsWith', 'fy')).toBe(true);
    });
  });

  describe('greaterThan operator', () => {
    it('returns true', () => {
      expect(evaluateFilter(100, 'greaterThan', 50)).toBe(true);
    });

    it('returns false', () => {
      expect(evaluateFilter(10, 'greaterThan', 20)).toBe(false);
    });
  });

  describe('greaterThanOrEqual operator', () => {
    it('returns true', () => {
      expect(evaluateFilter(100, 'greaterThanOrEqual', 100)).toBe(true);
    });
  });

  describe('lessThan operator', () => {
    it('returns true', () => {
      expect(evaluateFilter(25, 'lessThan', 30)).toBe(true);
    });
  });

  describe('lessThanOrEqual operator', () => {
    it('returns true', () => {
      expect(evaluateFilter(50, 'lessThanOrEqual', 50)).toBe(true);
    });
  });

});