import React, { useState, useEffect } from 'react';
import './App.css';
import Details from './components/Details';
import Sort from './components/Sort';
import PlayerList from './components/Overview';
import { fetchPlayers, Player } from './services/playerService';

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]); // Stanje za podatke igrača, inicijalno prazno polje
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null); // Stanje za odabranog igrača, inicijalno null

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
    setPlayers(prevPlayers => {
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
    setSelectedPlayer(player);
  };

  return (
    <div className=' grid-cols-2 grid-rows-2'>
      <div className='grid gap-6 grid-cols-2'>
        <div className='w-100 h-72  justify-start' >
          {selectedPlayer && <Details player={selectedPlayer} />}
        </div>
        <div className='w-72 h-72  justify-end'>
          <Sort onSort={handleSort} />
        </div>
      </div>
      <div className='w-1/2 h-1/3'>
        <PlayerList players={players} onSelect={handleSelectPlayer} />
      </div>
    </div>
  );
};

export default App;
