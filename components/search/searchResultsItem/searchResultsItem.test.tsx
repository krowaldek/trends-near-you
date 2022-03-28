import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchResultsItem from '.'
import { TrendLocationV1 } from 'twitter-api-v2'
import { vi, it, expect } from 'vitest'

it('display location information', async () => {
  const exampleItem: TrendLocationV1 = {
    name: 'France',
    woeid: 1,
    country: 'FR'
  }
  render(<SearchResultsItem item={exampleItem} />)
  expect(screen.getByTestId('heading')).toHaveTextContent(exampleItem.name)
})

it('check if click handler works', async () => {
  const mockOnClick = vi.fn()
  const exampleItem: TrendLocationV1 = {
    name: 'France',
    woeid: 1,
    country: 'FR'
  }
  render(<SearchResultsItem item={exampleItem} clickHandler={mockOnClick} />)

  fireEvent.click(screen.getByTestId('listitem'))

  expect(mockOnClick).toBeCalledTimes(1)
})
