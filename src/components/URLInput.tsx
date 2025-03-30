import React from 'react';

interface URLInputProps {
  url: string;
  setUrl: (url: string) => void;
}

const URLInput: React.FC<URLInputProps> = ({ url, setUrl }) => {
  return (
    <div className="w-full mb-6">
      <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-2">
        Enter URL
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          id="url-input"
          className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 border border-gray-300 rounded-md"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
    </div>
  );
};

export default URLInput;
