'use client';

import React, { useEffect, useState } from 'react';

// Define the structure for your content
type ContentType = 'verse' | 'research' | 'study' | 'motivational';

interface ContentItem {
  src: string;
  label: string;
  type: ContentType;
}

// MANAGE YOUR IMAGES HERE
const allContent: ContentItem[] = [
  // --- VERSES ---
  { src: '/verses/Verses (1).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (2).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (3).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (4).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (5).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (6).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (7).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (8).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (9).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (10).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (11).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (12).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (13).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (14).png', label: 'Verse of the Moment', type: 'verse' },
  { src: '/verses/Verses (15).png', label: 'Verse of the Moment', type: 'verse' },
  
  // --- RESEARCH BASED ---
  { src: '/research/Research (1).png', label: 'Research Fact', type: 'research' },
  { src: '/research/Research (2).png', label: 'Research Fact', type: 'research' },
  { src: '/research/Research (3).png', label: 'Research Fact', type: 'research' },
  { src: '/research/Research (4).png', label: 'Research Fact', type: 'research' },
  { src: '/research/Research (5).png', label: 'Research Fact', type: 'research' },
  { src: '/research/Research (6).png', label: 'Research Fact', type: 'research' },

  // --- STUDY TIPS ---
  { src: '/study-tips/Tips (1).png', label: 'Study Tip', type: 'study' },
  { src: '/study-tips/Tips (2).png', label: 'Study Tip', type: 'study' },
  { src: '/study-tips/Tips (3).png', label: 'Study Tip', type: 'study' },
  { src: '/study-tips/Tips (4).png', label: 'Study Tip', type: 'study' },
  { src: '/study-tips/Tips (5).png', label: 'Study Tip', type: 'study' },

  // --- MOTIVATIONAL ---
  { src: '/motivational/Motivational (1).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (2).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (3).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (4).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (5).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (6).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (7).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (8).png', label: 'Daily Motivation', type: 'motivational' },
  { src: '/motivational/Motivational (9).png', label: 'Daily Motivation', type: 'motivational' }
];

export default function Home() {
  // Initialize with null or a placeholder structure
  const [currentContent, setCurrentContent] = useState<ContentItem | null>(null);

  useEffect(() => {
    // 1. Pick a random item from the combined list
    const randomIndex = Math.floor(Math.random() * allContent.length);
    const selectedItem = allContent[randomIndex];
    setCurrentContent(selectedItem);

    // 2. Count the visit
    // Note: You might want to send the 'type' to your API to track which category is most popular
    fetch('/api/increment-access', {
      method: 'POST', // Assuming your API can accept body data, otherwise generic GET is fine
      body: JSON.stringify({ type: selectedItem.type }), 
    })
      .then((res) => res.json())
      .catch((err) => console.error('Counting error:', err));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center">
      {/* Dynamic Title based on the category */}
      <h1 className="text-3xl font-serif italic text-gray-800 mb-8">
        {currentContent ? currentContent.label : 'Opening the sanctuary...'}
      </h1>

      {currentContent ? (
        <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-gray-100">
          <img 
            src={currentContent.src} 
            alt={currentContent.label} 
            className="max-w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
      ) : (
        <p className="text-gray-400 animate-pulse">Loading...</p>
      )}
    </main>
  );
}