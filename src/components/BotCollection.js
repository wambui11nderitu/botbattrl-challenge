import React from "react";
import BotCard from "./BotCard";
  

function BotCollection({ botCollection, action, removeCard }) {
  // Your code here
    const displayBotCards = botCollection.map(bot => {
      return <BotCard key={bot.id} bot= {bot} action={action} removeCard={removeCard} />
    })


  return (
    <div className="ui four column grid">
      <div className="row">
      {displayBotCards}
      
      </div>
    </div>
  );
}

export default BotCollection;