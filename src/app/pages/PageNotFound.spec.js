import React from 'react'
import {getProps, renderComponent, renderShallowComponent} from '../../utils/testHelper'
import PageNotFound from './PageNotFound'

describe('PageNotFound', () => {
  let element = null

  beforeEach(() => {
    element = <PageNotFound/>
  })

  it('can render without error', () => {
    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(PageNotFound.defaultProps).map(key => {
      expect(props[key]).toBe(PageNotFound.defaultProps[key])
    })
  })
})
