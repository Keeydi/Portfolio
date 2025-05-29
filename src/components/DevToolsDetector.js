import React, { useEffect } from 'react';

const DevToolsDetector = () => {
  useEffect(() => {
    const checkDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        document.body.innerHTML = `
          <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 999999;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
          ">
            <h1 style="color: #ff0000; font-size: 24px; margin-bottom: 20px;">⚠️ Developer Tools Detected</h1>
            <p style="font-size: 18px; margin-bottom: 15px;">Please close the developer tools to continue using this application.</p>
            <p style="font-size: 16px; color: #888;">This application is protected against unauthorized inspection.</p>
          </div>
        `;
      }
    };

    // Check immediately
    checkDevTools();

    // Check on resize (dev tools opening/closing can trigger this)
    window.addEventListener('resize', checkDevTools);

    // Check periodically
    const interval = setInterval(checkDevTools, 1000);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDevTools);
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default DevToolsDetector; 