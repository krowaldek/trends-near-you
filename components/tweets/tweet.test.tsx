import { render, screen } from '@testing-library/react'
import React from 'react'
import { it, expect } from 'vitest'

const setup = () => {
  const tag = {
    name: 'test',
    value: 16
  } as tag

  render(<Tag tag={tag} size={16} clickHandler={() => {}} />)
}

it('should show tag name ', async () => {
  setup()
  expect(screen.getByText('test (16)')).toBeInTheDocument()
})

it('should calculate correct font size ', async () => {
  setup()
  expect(screen.getByText('test (16)').style.fontSize).toBe('24px')
})
