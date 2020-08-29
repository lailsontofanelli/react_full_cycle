import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Click <Link to="/users">here</Link> and see the colors. 
      </p>
    </div>
  )
}