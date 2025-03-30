import React, { useState, useRef } from 'react';
import URLInput from './URLInput';
import QRCodeDisplay from './QRCodeDisplay';
import SaveButton from './SaveButton';

const QRCodeGenerator: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const qrCodeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">QR Code Generator</h1>
      
      <URLInput url={url} setUrl={setUrl} />
      
      <div ref={qrCodeRef}>
        <QRCodeDisplay url={url} />
      </div>
      
      <div className="flex justify-center">
        <SaveButton url={url} qrCodeRef={qrCodeRef} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
