// src/index.js

import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function render(props: { container?: any; name?: string }) {
  const { container, name, ...rest } = props
  console.log(props, 'react-app-sub')

  ReactDOM.render(
    <>
      <App baseName={name || '/'} {...rest} />
    </>,
    container
      ? container.querySelector('#react-sub-root')
      : document.querySelector('#react-sub-root')
  )
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props: { container?: any }) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props: { container: any }) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#react-sub-root')
      : document.querySelector('#react-sub-root')
  )
}
