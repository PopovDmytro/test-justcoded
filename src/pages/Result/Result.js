import React from 'react';
import qs from 'query-string';

const Result = ({location}) => {

  return (
    <div className="text-center">
      <h1>Result</h1>
      <h2>QR scan result: {qs.parse(location.search).r || 'Please scan your QR code.'}</h2>
    </div>
  );
};

export default Result;