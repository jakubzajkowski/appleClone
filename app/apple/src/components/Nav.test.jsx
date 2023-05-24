import {render, screen,fireEvent} from '@testing-library/react'
import { expect,test } from 'vitest'
import Navigation from './Nav'


test('testing test', () => {
    render(<Navigation/>)
  
    expect(screen.getByText('Mac')).toBeDefined()
    expect(screen.getByText('Store')).toBeDefined()
    expect(screen.getByText('Ipad')).toBeDefined()
    expect(screen.getByText('Iphone')).toBeDefined()
    expect(screen.getByText('Support')).toBeDefined()
    expect(screen.getByText('TV & Home')).toBeDefined()
    fireEvent.mouseEnter(screen.getByText('Store'))
    expect(screen.getByText('Shop The Lastest')).toBeDefined()
  })