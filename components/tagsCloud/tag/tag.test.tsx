
import Tag, { tag } from '.'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { it, expect } from 'vitest'

it('should show tag name ', async () => {
  const tag = {
    name: 'test',
    value: 16
  } as tag

  render(<Tag tag={tag} size={16} />)

  expect(screen.getByText('test (16)')).toBeInTheDocument()
})

it('should calculate correct font size ', async () => {
  const tag = {
    name: 'test',
    value: 16
  } as tag

  render(<Tag tag={tag} size={0.5} />)

  expect(screen.getByText('test (16)').style.fontSize).toBe('24px')
})
