const Header = ({ onSidebarToggle, isSidebarMinimized }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: isSidebarMinimized ? '80px' : '280px',
      right: 0,
      height: '70px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e5e5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      transition: 'left 0.3s ease',
      zIndex: 999
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={onSidebarToggle}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#525866"/>
          </svg>
        </button>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a' }}>Dashboard</h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '16px',
              backgroundColor: '#ddd'
            }}></div>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>John Due</div>
            <div style={{ fontSize: '12px', color: '#888' }}>Web Yöneticisi</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '4px',
            position: 'relative'
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 13.75H17.5V15.25H2.5V13.75H4V8.5C4 6.9087 4.63214 5.38258 5.75736 4.25736C6.88258 3.13214 8.4087 2.5 10 2.5C11.5913 2.5 13.1174 3.13214 14.2426 4.25736C15.3679 5.38258 16 6.9087 16 8.5V13.75ZM14.5 13.75V8.5C14.5 7.30653 14.0259 6.16193 13.182 5.31802C12.3381 4.47411 11.1935 4 10 4C8.80653 4 7.66193 4.47411 6.81802 5.31802C5.97411 6.16193 5.5 7.30653 5.5 8.5V13.75H14.5ZM7.75 16.75H12.25V18.25H7.75V16.75Z" fill="#525866"/>
            </svg>
            <div style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              backgroundColor: '#ff4444',
              borderRadius: '4px'
            }}></div>
          </button>
          
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '4px'
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14.5H5.5V16H14.5V4H5.5V5.5H4V3.25C4 3.05109 4.07902 2.86032 4.21967 2.71967C4.36032 2.57902 4.55109 2.5 4.75 2.5H15.25C15.4489 2.5 15.6397 2.57902 15.7803 2.71967C15.921 2.86032 16 3.05109 16 3.25V16.75C16 16.9489 15.921 17.1397 15.7803 17.2803C16.6397 17.421 15.4489 17.5 15.25 17.5H4.75C4.55109 17.5 4.36032 17.421 4.21967 17.2803C4.07902 17.1397 4 16.9489 4 16.75V14.5ZM5.5 9.25H10.75V10.75H5.5V13L1.75 10L5.5 7V9.25Z" fill="#525866"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};