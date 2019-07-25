import React from 'react';
import QrReader from "react-qr-reader";
//
import './scan.scss';

const Scan = (props) => {

  const handleScan = (data) => {

    if(data) {
      props.history.push(`/result?r=${data}`);
    }
  };

  const handleError = (err) => {
    console.warn(err);
  };

  return (
    <div className="text-center">
      <h1>Scan QR code</h1>
      <QrReader
        className='qr-scanner'
        delay={300}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
};

export default Scan;