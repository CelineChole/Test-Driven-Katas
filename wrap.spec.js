const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Lines length is longer than column number', () => {
      const line = 'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.'
      expect(wrap(line, 100)).to.equal(line);
  });
});
