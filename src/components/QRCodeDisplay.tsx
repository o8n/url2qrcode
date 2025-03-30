import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeDisplayProps {
  url: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ url }) => {
  if (!url) {
    return (
      <div className="flex items-center justify-center w-full h-64 bg-gray-100 rounded-md">
        <p className="text-gray-500">Enter a URL to generate a QR code</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-md">
      <QRCodeSVG
        value={url}
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={true}
        className="mb-4"
      />
      <p className="text-sm text-gray-500 mt-2 break-all text-center">
        {url}
      </p>
    </div>
  );
};

export default QRCodeDisplay;
