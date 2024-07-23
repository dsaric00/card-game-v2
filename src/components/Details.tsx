
interface Player{
    id: number;
    realName:string;
    playerName: string;
    asset: string;
}
interface DetailsPtops{
    player:Player;
}
 const Details =({player}: DetailsPtops)=>{
    return(
        <div className="slide">
            <h2>Details:</h2>
            <h2> Real Name: {player.realName}</h2>
            <h2> Player Name: {player.playerName}</h2>
            <h2> Asset: {player.asset}</h2>

        </div>
    );

};
export default Details;