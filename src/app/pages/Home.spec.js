import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import {Home} from '../pages'

describe('Home', () => {
  let element = null

  beforeEach(() => {
    element = <Home/>
  })

  it('can render without error', () => {
    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    if(Home.defaultProps === undefined) {
      console.warn('Home.defaultProps is undefined')
      return
    }

    Object.keys(Home.defaultProps).map(key => {
      expect(props[key]).toBe(Home.defaultProps[key])
    })
  })
})
