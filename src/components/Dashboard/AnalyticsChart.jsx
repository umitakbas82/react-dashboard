import React from 'react'
import './AnalyticsChart.css'

const AnalyticsChart = () => {
  const months = ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A']
  
  return (
    <div className="analytics-chart">
      <div className="chart-header">
        <div className="chart-title-section">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1 7.5H12.9V16.5H11.1V7.5ZM14.7 11.1H16.5V16.5H14.7V11.1ZM7.50002 12.9H9.30002V16.5H7.50002V12.9ZM14.7 4.8H5.70002V19.2H18.3V8.4H14.7V4.8ZM3.90002 3.8928C3.90002 3.3996 4.30232 3 4.79912 3H15.6L20.1 7.5V20.0937C20.1009 20.2119 20.0784 20.3291 20.0339 20.4386C19.9895 20.5481 19.9239 20.6478 19.8409 20.7319C19.7579 20.8161 19.6591 20.8831 19.5503 20.9291C19.4414 20.9751 19.3245 20.9992 19.2063 21H4.79372C4.55736 20.9984 4.33114 20.9038 4.16392 20.7367C3.9967 20.5697 3.90191 20.3436 3.90002 20.1072V3.8928Z" fill="#525866"/>
          </svg>
          <div className="chart-title">Aylara Göre Kullanıcı Ziyaretleri</div>
        </div>
        <div className="chart-legends">
          <div className="legend-item">
            <div className="legend-dot blue"></div>
            <span>Masaüstü</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot cyan"></div>
            <span>Tablet</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot purple"></div>
            <span>Mobil</span>
          </div>
        </div>
        <div className="year-dropdown">
          <span>2025</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99999 10.879L13.7125 7.1665L14.773 8.227L9.99999 13L5.22699 8.227L6.28749 7.1665L9.99999 10.879Z" fill="#525866"/>
          </svg>
        </div>
      </div>
      
      <div className="chart-divider"></div>
      
      <div className="chart-stats">
        <div className="stat-item">
          <div className="stat-icon blue">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.27 10.7875L13.9825 14.5H5.49854V6.016L9.21104 9.7285L13.453 5.48575L14.5143 6.54625L10.27 10.7875Z" fill="#335CFF"/>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">MASAÜSTÜ</div>
            <div className="stat-amount">
              <span>47.654 Kişi</span>
              <div className="stat-change positive">+5%</div>
            </div>
          </div>
        </div>
        
        <div className="stat-divider"></div>
        
        <div className="stat-item">
          <div className="stat-icon cyan">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4542 10.27L7.21217 14.5135L6.15167 13.4522L10.3944 9.21024L6.68192 5.49774H15.1667V13.9825L11.4542 10.27Z" fill="#47C2FF"/>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">TABLET</div>
            <div className="stat-amount">
              <span>23.400 Kişi</span>
              <div className="stat-change negative">-3%</div>
            </div>
          </div>
        </div>
        
        <div className="stat-divider"></div>
        
        <div className="stat-item">
          <div className="stat-icon purple">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1208 10.27L6.8788 14.5135L5.8183 13.4522L10.061 9.21024L6.34855 5.49774H14.8333V13.9825L11.1208 10.27Z" fill="#7D52F4"/>
            </svg>
          </div>
          <div className="stat-info">
            <div className="stat-label">MOBİL</div>
            <div className="stat-amount">
              <span>67.000 Kişi</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="chart-divider"></div>
      
      <div className="chart-container">
        <div className="chart-y-axis">
          <div className="y-label">20k</div>
          <div className="y-label">15k</div>
          <div className="y-label">10k</div>
          <div className="y-label">0</div>
        </div>
        <div className="chart-content">
          {months.map((month, index) => (
            <div key={index} className="chart-column">
              <div className="chart-bars">
                <div className="empty-space"></div>
                <div className="bar blue" style={{height: '80px'}}></div>
                <div className="bar cyan" style={{height: '32px'}}></div>
                <div className="bar purple" style={{height: '16px'}}></div>
              </div>
              <div className="month-label">{month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnalyticsChart
