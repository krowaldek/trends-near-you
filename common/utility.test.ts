import { it, expect } from 'vitest'
import { removeHash } from './utility'
it('should remove hash from string', () => {
  const inputWithHash = '#test output'
  const expectedOutput = 'test output'
  expect(removeHash(inputWithHash)).toEqual(expectedOutput)

  const inputWithoutHash = '#test output'
  expect(removeHash(inputWithoutHash)).toEqual(expectedOutput)
})
