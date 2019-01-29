const { expect } = require('chai');
const wrap = require('./wrap');

const line = 'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.'

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns line if length is longer than column number', () => {
      expect(wrap(line, 100)).to.equal(line);
  });

  it('Returns index of empty string', () => {
    // expect(line.lastIndexOf(' ')).to.equal()
    expect(' ')
  })
});
