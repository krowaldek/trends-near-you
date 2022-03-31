import React from 'react'
import Search from '.'
import userEvent from '@testing-library/user-event'
import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react'
import { TrendLocationV1 } from 'twitter-api-v2'
import { vi, it, expect } from 'vitest'

vi.mock('../../hooks/useLocations', () => {
  return {
    __esModule: true,
    default: () => ({
      data: [{
        name: 'Fresno',
        woeid: 1,
        country: 'UE'
      },
      {
        name: 'France',
        woeid: 2,
        country: 'FR'
      },
      {
        name: 'Germany',
        woeid: 3,
        country: 'DE'
      }] as TrendLocationV1[]
    })
  }
})

it('should show two results ', async () => {
  render(<Search />)
  const searchInput = screen.getByTestId('input')
  userEvent.type(searchInput, 'FR')
  await waitFor(() => {
    console.log('screen.getAllByTestId :>> ', screen.getAllByTestId('listitem').length)
    return expect(screen.getAllByTestId('listitem')).toHaveLength(2)
  })
})

it('should hide search results after click ', async () => {
  render(<Search />)
  const searchInput = screen.getByTestId('input')

  userEvent.type(searchInput, 'FR')

  await waitFor(() => {
    return userEvent.click(screen.getAllByTestId('listitem')[0])
  })

  waitForElementToBeRemoved(screen.queryAllByTestId('listitem')).then(() => {
    expect(screen.queryAllByTestId('listitem')).toHaveLength(0)
  })
})

it('should hide search results after clear input ', async () => {
  render(<Search />)
  const searchInput = screen.getByTestId('input')

  userEvent.type(searchInput, 'FR')
  userEvent.clear(searchInput)
  userEvent.click(searchInput)

  await waitFor(() => {
    return expect(screen.queryAllByTestId('listitem')).toHaveLength(0)
  })
})
