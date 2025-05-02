import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchBar = ({ setResults, setLoading, setError, currentTool }) => {
  const [query, setQuery] = useState('');

  const performGoogleSearch = async () => {
    if (query.trim() !== '') {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://127.0.0.1:8000/search?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data.results); // Update state with results
      } catch (error) {
        setError("Error fetching search results.");
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a search term.');
    }
  };

  const startVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript); // Update the query with the recognized text
      };

      recognition.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
        if (event.error === 'not-allowed') {
          alert('Microphone access is denied. Please allow microphone access in your browser settings.');
        } else if (event.error === 'network') {
          alert('Network error. Please check your internet connection.');
        } else if (event.error === 'no-speech') {
          alert('No speech detected. Please try again.');
        } else {
          alert('Voice recognition failed. Please try again.');
        }
      };
    } else {
      alert('Voice recognition is not supported in this browser.');
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={`Search ${currentTool}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.searchButton} onClick={performGoogleSearch}>
        Search
      </button>
      <button className={styles.micButton} onClick={startVoiceSearch}>
        <i className="fas fa-microphone"></i>
        
      </button>
    </div>
  );
};

export default SearchBar;