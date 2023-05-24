import {render, screen} from '@testing-library/react'
import { expect,test } from 'vitest'
import Home from './Home'


test('test home page', () => {
    render(<Home/>)
  
    expect(screen.getByText('IPhone 14 Pro')).toBeDefined()
  })