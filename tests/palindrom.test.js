const palindrom = require('../utils/for_testing').palindrom

test('Palindrom of a', () => {
  expect(palindrom('a')).toBe('a')
})

test('Palindrom of react', () => {
  expect(palindrom('react')).toBe('tcaer')
})

test('Palindrom of saippuakauppias', () => {
  expect(palindrom('saippuakauppias')).toBe('saippuakauppias')
})