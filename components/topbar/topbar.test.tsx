import { render, screen } from '@testing-library/react'
import React from 'react'
import { it, expect } from 'vitest'
import Topbar from '.'

const setup = () => {
  const title = 'test title'
  render(<Topbar title={title} />)
}

it('should show top bar title ', async () => {
  setup()
  expect(screen.getByRole('title')).toHaveTextContent('test title')
})
