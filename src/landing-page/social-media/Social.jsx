import React from 'react';

function Social() {
  return (
    <div style={{ position: 'relative', margin: 0, padding: 0 }}>
      {/* SVG */}
      <svg className="bottom-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ width: '100%', height: 'auto' }}>
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,213.3C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Social;