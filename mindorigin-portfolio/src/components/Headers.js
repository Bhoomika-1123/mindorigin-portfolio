
import React, { useState, useEffect } from 'react';

function Headers() {
  const [dark, setDark] = useState(false);
  const [today, setToday] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);

    // Format today's date nicely
    const date = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setToday(date);
  }, [dark]);

  return (
    <header className="border-b bg-white dark:bg-gray-900 p-4 flex justify-between items-center">
      {/* App name and today's date */}
      <div>
        <h1 className="font-bold text-lg dark:text-white">Mindorigin Portfolio</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{today}</p>
      </div>

      {/* Dark/Light toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="border px-3 py-1 rounded-lg dark:text-white"
      >
        {/* //for themee changing we have use it */}
        {dark ? 'Light' : 'Dark'} Mode
        
      </button>
    </header>
  );
}

export default Headers;

