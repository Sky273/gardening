import React from 'react'

function Plants() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2>Popular Plants</h2>
      <div className="grid">
        <div className="card">
          <h3>Tomatoes</h3>
          <p>Easy to grow and perfect for beginners.</p>
        </div>
        <div className="card">
          <h3>Herbs</h3>
          <p>Essential herbs for your kitchen garden.</p>
        </div>
        <div className="card">
          <h3>Flowers</h3>
          <p>Beautiful flowers to brighten your garden.</p>
        </div>
      </div>
    </div>
  )
}

export default Plants
