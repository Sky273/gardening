import React from 'react'

function Tips() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2>Gardening Tips</h2>
      <div className="grid">
        <div className="card">
          <h3>Watering Schedule</h3>
          <p>Water your plants early in the morning to prevent evaporation.</p>
        </div>
        <div className="card">
          <h3>Soil Preparation</h3>
          <p>Use rich, organic compost to improve soil quality.</p>
        </div>
        <div className="card">
          <h3>Pest Control</h3>
          <p>Natural ways to keep pests away from your garden.</p>
        </div>
      </div>
    </div>
  )
}

export default Tips
