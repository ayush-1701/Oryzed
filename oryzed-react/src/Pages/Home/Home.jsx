import React, { useState } from 'react';
import styles from './Home.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentTool, setCurrentTool] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const navigateTo = (tool) => {
    setCurrentTool(tool);
    setShowSearch(true);
  };

  return (
    <div>
      <section className={styles.toolsSection}>
        <div
          className={`${styles.toolCard} ${currentTool === 'Contract Drafting' ? styles.selected : ''}`}
          onClick={() => navigateTo('Contract Drafting')}
        >
          <i className="fas fa-file-signature"></i>
          <h3>Contract Drafting</h3>
          <p>Generate well-structured legal contracts tailored to your needs.</p>
        </div>
        <div
          className={`${styles.toolCard} ${currentTool === 'Judgement Summarization' ? styles.selected : ''}`}
          onClick={() => navigateTo('Judgement Summarization')}
        >
          <i className="fas fa-scale-balanced"></i>
          <h3>Judgement Summarization</h3>
          <p>Summarize complex judgments into easy-to-understand briefs.</p>
        </div>
        <div
          className={`${styles.toolCard} ${currentTool === 'Case Drafting' ? styles.selected : ''}`}
          onClick={() => navigateTo('Case Drafting')}
        >
          <i className="fas fa-briefcase"></i>
          <h3>Case Drafting</h3>
          <p>Create professional case briefs with AI assistance.</p>
        </div>
        <div
          className={`${styles.toolCard} ${currentTool === 'AI Legal Research' ? styles.selected : ''}`}
          onClick={() => navigateTo('AI Legal Research')}
        >
          <i className="fas fa-magnifying-glass"></i>
          <h3>AI Legal Research</h3>
          <p>Get relevant case laws, statutes, and legal principles instantly.</p>
        </div>
      </section>

      {showSearch && (
        <div className={styles.searchSection}>
          <h2>Searching in: {currentTool}</h2>
          <SearchBar
            setResults={setResults}
            setLoading={setLoading}
            setError={setError}
            currentTool={currentTool}
          />
          {loading && <p>Loading...</p>}
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.results}>
            {results.map((result, index) => (
              <div key={index} className={styles.resultItem}>
                {result}
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <p>&copy; 2025 Oryzed. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;