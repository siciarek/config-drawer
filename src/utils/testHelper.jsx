import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import ShallowRenderer from 'react-test-renderer/shallow';
import {Provider} from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import store from '../app/store'

class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = value
  }

  removeItem(key) {
    delete this.store[key]
  }
}

const simulateClick = component => {
  ReactTestUtils.Simulate.click(component);
}

const renderComponent = component => {
  return ReactTestUtils.renderIntoDocument(
    <Provider store={store}>
      <div>
        {component}
      </div>
    </Provider>
  )
}

const renderShallowComponent = element => {
  const renderer = new ShallowRenderer()
  renderer.render(element)
  return renderer.getRenderOutput();
}

const getProps = component => {
  return component.props.children.props.children.props
}

export {renderComponent, LocalStorageMock, renderShallowComponent, getProps, simulateClick}
