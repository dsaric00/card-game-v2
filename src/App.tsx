import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Details from './components/Details';
import Sort from './components/Sort';
import Overview from './components/Overview';
import { fetchPlayers, Player } from './services/playerService';

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    getPlayers();
  }, []);

  const handleSort = (order: 'asc' | 'desc') => {
    setPlayers((prevPlayers) => {
      return [...prevPlayers].sort((a, b) => {
        if (order === 'asc') {
          return a.realName.localeCompare(b.realName);
        } else {
          return b.realName.localeCompare(a.realName);
        }
      });
    });
  };

  const handleSelectPlayer = (player: Player | null) => {
    if (selectedPlayer && player && selectedPlayer.id === player.id) {
      setSelectedPlayer(null);
      const focusedElement = document.activeElement as HTMLElement;
      if (focusedElement) {
        focusedElement.blur();
      }
    } else {
      setSelectedPlayer(player);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setSelectedPlayer(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="md:flex">
      <div className="flex-1" ref={containerRef}>
        {selectedPlayer && window.innerWidth >= 640 && (
          <Details player={selectedPlayer} />
        )}
        <Overview
          players={players}
          selectedPlayer={selectedPlayer}
          onSelectPlayer={handleSelectPlayer}
        />
      </div>
      <div className="md:w-1/3">
        <Sort
          onSort={handleSort}
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
    </div>
  );
};

export default App;
