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

  const handleSelectPlayer = (player: Player) => {
    if (selectedPlayer && selectedPlayer.id === player.id) {
      // Deselect player if the same player is clicked
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(player);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    console.log('Handling click outside');
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      console.log('Clicked outside of container');
      setSelectedPlayer(null);
    }
  };

  useEffect(() => {
    console.log('Adding event listener for click outside');
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      console.log('Removing event listener for click outside');
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  // useEffect for Dark Mod
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="grid grid-cols-3 max-h-screen">
      <div className="col-span-2" ref={containerRef}>
        {selectedPlayer && <Details player={selectedPlayer} />}
        <Overview players={players} onSelect={handleSelectPlayer} />
      </div>
      <div className="justify-end">
        <Sort onSort={handleSort} isDarkMode={isDarkMode} toggleDarkMode={()=> setIsDarkMode(!isDarkMode)} />
      </div>
    </div>
  );
};

export default App;
