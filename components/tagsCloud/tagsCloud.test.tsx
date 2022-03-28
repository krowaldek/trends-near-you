import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TagsCloud from '.'
import { it, expect } from 'vitest'
import { tag } from './tag'

it('should display tags with correct sizes', async () => {
  const tags: tag[] = []
  for (let index = 1; index <= 5; index++) {
    tags.push({
      name: `tag ${index}`,
      value: index * 10,
      query: ''
    })
  }
  render(<TagsCloud tags={tags} />)
  const items = screen.getAllByTestId('item')
  const isCorrect = !!items.map(i => +i.style.fontSize.slice(0, -2)).reduce((n, item) => n !== false && item >= n && item)
  expect(isCorrect).toBeTruthy()
  expect(items).toHaveLength(5)
})
