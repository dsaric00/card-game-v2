export interface Player{
    id: number;
    realName: string;
    playerName:string;
    asset:string;
}

export const fetchPlayers = async (): Promise<Player[]> => {
    try {
   const response =await fetch('./assets/players.json');
   if(!response.ok){
    throw new Error('Network response was not ok');
   }
   const data= await response.json();
   return data;
    }catch(error){
      console.error('Fetch error:',error);
      throw error;
    }
  };
  