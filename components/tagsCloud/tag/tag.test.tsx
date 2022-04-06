
import Tag from './index'
import { Tag as TagModel } from '../../../common/model'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { it, expect, describe } from 'vitest'
describe('Contact Info in its Editable mode', () => {
  const setup = () => {
    const tag = {
      name: 'test',
      value: 16
    } as TagModel

    render(<Tag tag={tag} size={16} clickHandler={() => {}} />)
  }

  it('should show tag name ', async () => {
    setup()
    expect(screen.getByText('test (16)')).toBeInTheDocument()
  })

  it('should calculate correct font size ', async () => {
    setup()
    expect(screen.getByText('test (16)').style.fontSize).toBe('272px')
  })
})
