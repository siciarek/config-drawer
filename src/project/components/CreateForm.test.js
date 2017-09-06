import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import CreateForm from './CreateForm'

describe('CreateForm', () => {
  let element = null

  beforeEach(() => {
    element = <CreateForm/>
  })

  it('can render without error', () => {
    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    Object.keys(CreateForm.defaultProps).map(key => {
      expect(props[key]).toBe(CreateForm.defaultProps[key])
    })
  })
})
