import React from 'react';

interface SaveButtonProps {
  url: string;
  qrCodeRef: React.RefObject<HTMLDivElement | null>;
}

const SaveButton: React.FC<SaveButtonProps> = ({ url, qrCodeRef }) => {
  const saveQRCode = () => {
    if (!qrCodeRef.current || !url) return;

    const svg = qrCodeRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      const pngFile = canvas.toDataURL('image/png');
      
      // Create download link
      const downloadLink = document.createElement('a');
      downloadLink.download = `qrcode-${url.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 20)}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <button
      onClick={saveQRCode}
      disabled={!url}
      className={`mt-6 px-6 py-3 rounded-md text-white font-medium ${
        url
          ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          : 'bg-gray-400 cursor-not-allowed'
      }`}
    >
      Save QR Code
    </button>
  );
};

export default SaveButton;
