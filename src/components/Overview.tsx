import React, {useState, useEffect} from 'react';
import '../App.css';

interface Player{
    id:number;
    realName:string;
    playerName:string;
    asset:string;
}

interface OverviewPropsb{
    players: Player[];
    onSelect:(player: Player)=> void;
}

const Overview =({players, onSelect}: OverviewPropsb)=>{
const [localPlayers, setLocalPlayers]=useState<Player[]>(players);

useEffect(()=>{
    setLocalPlayers(players);
}, [players]);

return (
    <div>
    <h2>Overview</h2>
    <div className='grid gap-6 grid-cols-3 grid-rows-2'>
      {localPlayers.map((player) => (
        <div  className='w-20 h-40 truncate hover:text-clip ' key={player.id} onClick={() => onSelect(player)}>
          <p>{player.realName}</p>
          <p>{player.playerName}</p>
          <p>{player.asset}</p>
        </div>
      ))}
    </div>
  </div>
);
};

export default Overview;