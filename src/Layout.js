import React from 'react'
import { LinkHelper } from './routes'
import Counter from './Counter'

export default function Layout({ children }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <LinkHelper to={'game'}/>
      <Counter />
      {children}
    </div>
  )
}
