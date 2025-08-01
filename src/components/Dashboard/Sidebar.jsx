const Sidebar = ({ isMinimized = false, onToggle }) => {
  const sidebarClass = isMinimized ? 'sidebar sidebar-minimized' : 'sidebar sidebar-open';

  return (
    <div className={sidebarClass} style={{
      position: 'fixed',
      left: 0,
      top: 0,
      height: '100vh',
      width: isMinimized ? '80px' : '280px',
      backgroundColor: '#1a1a1a',
      color: 'white',
      transition: 'width 0.3s ease',
      zIndex: 1000,
      overflow: 'hidden'
    }}>
      <div style={{
        padding: '16px',
        borderBottom: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#F6B51E',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F6B51E"/>
            </svg>
          </div>
          {!isMinimized && (
            <div>
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Company Name</div>
              <div style={{ fontSize: '12px', color: '#888' }}>HR Management</div>
            </div>
          )}
        </div>
        <button 
          onClick={onToggle}
          style={{
            background: 'none',
            border: 'none',
            color: '#888',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={isMinimized ? "M7 12L13 6L7 0" : "M14.3106 7.94659L10.0002 3.63611L5.68968 7.94659L6.67177 8.92872L10.0002 5.60029L13.3286 8.92872L14.3106 7.94659ZM5.68958 12.0538L10.0001 16.3643L14.3106 12.0538L13.3285 11.0717L10.0001 14.4001L6.67167 11.0717L5.68958 12.0538Z"} 
            fill="#525866"/>
          </svg>
        </button>
      </div>

      <div style={{ padding: '16px 0', height: 'calc(100vh - 100px)', overflowY: 'auto' }}>
        <div style={{ marginBottom: '24px' }}>
          {!isMinimized && <div style={{ fontSize: '12px', color: '#888', padding: '0 16px', marginBottom: '8px' }}>MAIN</div>}
          <nav>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: isMinimized ? '12px 16px' : '12px 16px',
              backgroundColor: '#335CFF',
              color: 'white',
              cursor: 'pointer',
              position: 'relative'
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.75 16.75V9.25H16.75V16.75H10.75ZM3.25 10.75V3.25H9.25V10.75H3.25ZM7.75 9.25V4.75H4.75V9.25H7.75ZM3.25 16.75V12.25H9.25V16.75H3.25ZM4.75 15.25H7.75V13.75H4.75V15.25ZM12.25 15.25H15.25V10.75H12.25V15.25ZM10.75 3.25H16.75V7.75H10.75V3.25ZM12.25 4.75V6.25H15.25V4.75H12.25Z" fill="currentColor"/>
              </svg>
              {!isMinimized && (
                <>
                  <span style={{ marginLeft: '12px', fontSize: '14px' }}>Genel Bakış</span>
                  <svg style={{ marginLeft: 'auto' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7959 9.99926L7.08337 6.28676L8.14387 5.22626L12.9169 9.99926L8.14387 14.7723L7.08337 13.7118L10.7959 9.99926Z" fill="currentColor"/>
                  </svg>
                </>
              )}
              {isMinimized && (
                <div style={{
                  position: 'absolute',
                  left: '60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#333',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s'
                }} className="tooltip">
                  Genel Bakış
                </div>
              )}
            </div>

            {[
              { icon: "M2.5 17.5C2.5 15.9087 3.13214 14.3826 4.25736 13.2574C5.38258 12.1321 6.9087 11.5 8.5 11.5C10.0913 11.5 11.6174 12.1321 12.7426 13.2574C13.8679 14.3826 14.5 15.9087 14.5 17.5H13C13 16.3065 12.5259 15.1619 11.682 14.318C10.8381 13.4741 9.69347 13 8.5 13C7.30653 13 6.16193 13.4741 5.31802 14.318C4.47411 15.1619 4 16.3065 4 17.5H2.5ZM8.5 10.75C6.01375 10.75 4 8.73625 4 6.25C4 3.76375 6.01375 1.75 8.5 1.75C10.9862 1.75 13 3.76375 13 6.25C13 8.73625 10.9862 10.75 8.5 10.75ZM8.5 9.25C10.1575 9.25 11.5 7.9075 11.5 6.25C11.5 4.5925 10.1575 3.25 8.5 3.25C6.8425 3.25 5.5 4.5925 5.5 6.25C5.5 7.9075 6.8425 9.25 8.5 9.25ZM14.713 12.0273C15.767 12.5019 16.6615 13.2709 17.2889 14.2418C17.9164 15.2126 18.2501 16.344 18.25 17.5H16.75C16.7502 16.633 16.4999 15.7844 16.0293 15.0562C15.5587 14.328 14.8878 13.7512 14.0972 13.3953L14.7123 12.0273H14.713ZM14.197 3.55975C14.9526 3.87122 15.5987 4.40015 16.0533 5.07942C16.5078 5.75869 16.7503 6.55768 16.75 7.375C16.7503 8.40425 16.3658 9.39642 15.6719 10.1566C14.978 10.9168 14.025 11.3901 13 11.4835V9.97375C13.5557 9.89416 14.0713 9.63851 14.471 9.24434C14.8707 8.85017 15.1335 8.33824 15.2209 7.7837C15.3082 7.22916 15.2155 6.66122 14.9563 6.16327C14.6971 5.66531 14.2851 5.26356 13.7808 5.017L14.197 3.55975Z", label: "Kullanıcılar" },
              { icon: "M4.75 7V16H15.25V7H4.75ZM4.75 5.5H15.25V4H4.75V5.5ZM16 17.5H4C3.80109 17.5 3.61032 17.421 3.46967 17.2803C3.32902 17.1397 3.25 16.9489 3.25 16.75V3.25C3.25 3.05109 3.32902 2.86032 3.46967 2.71967C3.61032 2.57902 3.80109 2.5 4 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V16.75C16.75 16.9489 16.671 17.1397 16.5303 17.2803C16.3897 17.421 16.1989 17.5 16 17.5ZM6.25 8.5H9.25V11.5H6.25V8.5ZM6.25 13H13.75V14.5H6.25V13ZM10.75 9.25H13.75V10.75H10.75V9.25Z", label: "Sayfalar" },
              { icon: "M3.75 5C3.75 4.65483 4.02983 4.375 4.375 4.375H15.625C15.9702 4.375 16.25 4.65483 16.25 5V15C16.25 15.3452 15.9702 15.625 15.625 15.625H4.375C4.02983 15.625 3.75 15.3452 3.75 15V5ZM5 5.625V14.375H15V5.625H5ZM6.25 6.875H10V10.625H6.25V6.875ZM7.5 8.125V9.375H8.75V8.125H7.5ZM11.25 8.125H13.75V6.875H11.25V8.125ZM13.75 10.625H11.25V9.375H13.75V10.625ZM6.25 11.875V13.125H13.75V11.875H6.25Z", label: "Blog/Haber" },
              { icon: "M10 3.125L15.9375 6.5625V13.4375L10 16.875L4.0625 13.4375V6.5625L10 3.125ZM5.93367 6.92356L10.0001 9.27775L14.0664 6.92359L10 4.56938L5.93367 6.92356ZM5.3125 8.00831V12.7168L9.37506 15.0688V10.3603L5.3125 8.00831ZM10.6251 15.0688L14.6875 12.7168V8.00836L10.6251 10.3603V15.0688Z", label: "Ürünler" }
            ].map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: isMinimized ? '12px 16px' : '12px 16px',
                color: '#888',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={item.icon} fill="currentColor"/>
                </svg>
                {!isMinimized && <span style={{ marginLeft: '12px', fontSize: '14px' }}>{item.label}</span>}
                {isMinimized && (
                  <div style={{
                    position: 'absolute',
                    left: '60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#333',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.2s'
                  }} className="tooltip">
                    {item.label}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        .sidebar:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};