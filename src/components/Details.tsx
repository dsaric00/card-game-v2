interface Player {
  id: number;
  realName: string;
  playerName: string;
  asset: string;
}
interface DetailsPtops {
  player: Player;
}
const Details = ({ player }: DetailsPtops) => {
  return (
    <div className="text-2xl font-sans rounded-3xl  m-3 border border-black dark:border-white  p-5 ">
      <h2 className="text-4xl">Details:</h2>
      <div className="p-5">
        <h2> Real Name: {player.realName}</h2>
        <h2> Player Name: {player.playerName}</h2>
        <h2> Asset: {player.asset}</h2>
      </div>
    </div>
  );
};
export default Details;
