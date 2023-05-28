'use client'

import { useEffect, useState } from 'react';

const Download = () => {
    const [downloaded, setDownloaded] = useState(false);
  
    useEffect(() => {
      if (!downloaded) {
        // Create a temporary anchor element to initiate the download
        const link = document.createElement('a');
        link.href = '/music.mp3';
        link.download = 'music.mp3';
        link.click();
        
        // Clean up the temporary element
        link.remove();
  
        setDownloaded(true);
      }
    }, [downloaded]);
  
    return null;
  };
  
  export default Download;