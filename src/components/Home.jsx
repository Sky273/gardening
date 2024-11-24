import React from 'react'

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Welcome to Garden Paradise</h1>
          <p>Your guide to creating a beautiful garden</p>
        </div>
      </section>

      <section className="featured container">
        <h2>Featured Content</h2>
        <div className="grid">
          <div className="card">
            <h3>Starting Your Garden</h3>
            <p>Learn the basics of starting your own garden from scratch.</p>
          </div>
          <div className="card">
            <h3>Seasonal Plants</h3>
            <p>Discover which plants thrive in each season.</p>
          </div>
          <div className="card">
            <h3>Garden Care</h3>
            <p>Essential tips for maintaining a healthy garden.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
