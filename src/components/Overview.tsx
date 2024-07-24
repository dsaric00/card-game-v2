import  { useState, useEffect } from 'react';
import '../App.css';

interface Player {
  id: number;
  realName: string;
  playerName: string;
  asset: string;
}

interface OverviewPropsb {
  players: Player[];
  onSelect: (player: Player) => void;
}

const Overview = ({ players, onSelect }: OverviewPropsb) => {
  const [localPlayers, setLocalPlayers] = useState<Player[]>(players);

  useEffect(() => {
    setLocalPlayers(players);
  }, [players]);

  return (
    <div className="border border-black dark:border-white m-5">
      <h1 className="text-4xl p-5">Overview</h1>
      <h2 className="text-3xl px-5">Select a card for details</h2>
      <div className="grid gap-3 grid-cols-3 grid-rows-2 px-5 ">
        {localPlayers.map((player) => (
          <button
            className=" p-5 m-5 text-start text-2xl  border border-black dark:border-white  focus:bg-green-500 font-sans"
            key={player.id}
            onClick={() => {
              console.log('Card clicked:', player);
              onSelect(player);
            }}
          >
            <p className="truncate">{player.realName}</p>
            <p className="truncate">{player.playerName}</p>
            <p className="truncate ">{player.asset}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Overview;
