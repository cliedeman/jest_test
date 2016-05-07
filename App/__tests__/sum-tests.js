/* global jest, describe, pit, expect */

jest.unmock('../sum');

describe('sum', () => {
  it('adds 1 + 2 to equal 3', async () => {
    const sum = require('../sum')
    expect(await sum(1, 2)).toBe(3)
  })
})