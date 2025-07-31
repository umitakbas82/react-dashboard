import React from 'react'
import './CountryAnalytics.css'

const CountryAnalytics = () => {
  const countries = [
    { 
      name: 'United States', 
      flag: '🇺🇸', 
      percentage: 50,
      code: 'US'
    },
    { 
      name: 'India', 
      flag: '🇮🇳', 
      percentage: 30,
      code: 'IN'
    },
    { 
      name: 'United Kingdom', 
      flag: '🇬🇧', 
      percentage: 20,
      code: 'GB'
    },
    { 
      name: 'Australia', 
      flag: '🇦🇺', 
      percentage: 10,
      code: 'AU'
    }
  ]

  return (
    <div className="country-analytics">
      <div className="country-header">
        <div className="country-title-section">
          <h3>Aktif Kullanıcılar</h3>
        </div>
        <button className="view-all-button">
          Tümünü Gör
        </button>
      </div>
      
      <div className="country-divider"></div>
      
      <div className="country-content">
        <div className="total-count">8.8k</div>
        
        <div className="countries-list">
          {countries.map((country, index) => (
            <div key={index} className="country-item">
              <div className="country-flag">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#F0F0F0"/>
                  {/* Flag patterns would go here - simplified for demo */}
                  <text x="12" y="16" textAnchor="middle" fontSize="14">{country.flag}</text>
                </svg>
              </div>
              <div className="country-info">
                <div className="country-name">{country.name}</div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-background"></div>
                    <div 
                      className="progress-fill" 
                      style={{width: `${country.percentage}%`}}
                    ></div>
                  </div>
                  <div className="percentage-text">{country.percentage}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryAnalytics
