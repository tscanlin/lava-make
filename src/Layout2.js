import React from 'react'
import Counter from './Counter'

export default function Layout({ children }) {
  return (
    <div>
      <h1>Hello, again!!!!!!!!!!!!!!!</h1>
      <Counter />
      {children}
    </div>
  )
}
