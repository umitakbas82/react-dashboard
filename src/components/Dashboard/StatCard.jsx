import React from 'react'
import './StatCard.css'

const StatCard = ({ title, value, period, trend, percentage, large = false }) => {
  return (
    <div className={`stat-card ${large ? 'large' : ''}`}>
      <div className="stat-content">
        <div className="stat-header">
          <div className="stat-controls">
            <div className="period-dropdown">
              <span>{period}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99999 10.879L13.7125 7.1665L14.773 8.227L9.99999 13L5.22699 8.227L6.28749 7.1665L9.99999 10.879Z" fill="#525866"/>
              </svg>
            </div>
            <div className="stat-title">{title}</div>
          </div>
          <div className="stat-value-section">
            <div className="stat-value">{value}</div>
            <div className="stat-badge">
              <div className={`trend-badge ${trend}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {trend === 'up' ? (
                    <path d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7" stroke="#1FC16B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  ) : (
                    <path d="M11 8.5L7.06568 4.56568C6.86768 4.36768 6.76867 4.26867 6.65451 4.23158C6.55409 4.19895 6.44591 4.19895 6.34549 4.23158C6.23133 4.26867 6.13232 4.36768 5.93431 4.56569L4.56568 5.93432C4.36768 6.13232 4.26867 6.23133 4.15451 6.26842C4.05409 6.30105 3.94591 6.30105 3.84549 6.26842C3.73133 6.23133 3.63232 6.13232 3.43431 5.93431L1 3.5M11 8.5H7.5M11 8.5V5" stroke="#FB3748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  )}
                </svg>
                <span>{percentage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatCard
