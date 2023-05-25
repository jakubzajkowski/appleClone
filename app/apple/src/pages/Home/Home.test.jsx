import {render, screen} from '@testing-library/react'
import { expect,test } from 'vitest'
import Home from './Home'


test('test home page', () => {
    render(<Home mobile={{matches:true}}/>)
  
    expect(screen.getByText('iPad Pro')).toBeDefined()
  })