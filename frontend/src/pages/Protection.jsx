// Protection Page Component

import React from 'react';
import RiskMeter from '../components/dashboard/RiskMeter';

const Protection = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">MEV Protection</h1>
        <p className="page-subtitle">
          Advanced protection against MEV attacks
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <RiskMeter
          riskScore={35}
          lowThreats={12}
          mediumThreats={5}
          highThreats={2}
        />
      </div>

      <div className="placeholder-content" style={{ marginTop: '40px' }}>
        <p>Configure MEV protection settings and view detailed risk analysis.</p>
      </div>
    </div>
  );
};

export default Protection;
