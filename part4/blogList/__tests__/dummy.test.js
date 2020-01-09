const listHelper = require('../utils/listHelper')

describe('dummy', () => {
  test('dummy return one', () => {
    const blogs = []

    expect(listHelper.dummy(blogs)).toBe(1)
  })
})
