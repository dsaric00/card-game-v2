import  { useState, useEffect } from 'react';

interface Player {
  id: number;
  realName: string;
  playerName: string;
  asset: string;
}

interface OverviewProps {
  players: Player[];
  selectedPlayer: Player | null;
  onSelectPlayer: (player: Player | null) => void;
}

const Overview = ({
  players,
  selectedPlayer,
  onSelectPlayer,
}: OverviewProps) => {
  const [localPlayers, setLocalPlayers] = useState<Player[]>(players);

  const handleSelectPlayer = (player: Player | null) => {
    onSelectPlayer(player);
  };
  // Update localPlayers state when the player prop changes
  useEffect(() => {
    setLocalPlayers(players);
  }, [players]);

  return (
    <div className="border border-black rounded-3xl dark:border-white m-3">
      <h1 className="text-4xl p-5">Overview</h1>
      <h2 className="text-3xl px-5">Select a card for details</h2>
      <div className="grid gap-4 p-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {localPlayers.map((player) => (
          <button
            className={`transition-transform duration-700 ease-in-out border border-black rounded-2xl p-5 m-5 text-start text-2xl ${
              selectedPlayer &&
              selectedPlayer.id === player.id &&
              window.innerWidth < 640
                ? 'col-span-full  text-white'
                : 'dm:hover:bg-green-300'
            } focus:bg-green-500 font-sans dark:border-white`}
            key={player.id}
            onClick={() => handleSelectPlayer(player)}
          >
            {/*Ternary Operator to check screen size */}
            {selectedPlayer &&
            selectedPlayer.id === player.id &&
            window.innerWidth < 640 ? (
              <div>
                {/*If the screen width is less than 640px the card will expand */}
                <h3 className="font-medium">Details:</h3>
                <p> Real Name: {player.realName}</p>
                <p> Player Name: {player.playerName}</p>
                <p>Asset: {player.asset}</p>
              </div>
            ) : (
              <div>
                <p className="truncate">{player.realName}</p>
                <p className="truncate">{player.playerName}</p>
                <p className="truncate">{player.asset}</p>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Overview;
