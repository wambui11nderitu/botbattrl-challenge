import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  //your bot army code here...
const displayBots = props.bots.map(bot => {
  return <BotCard bot={bot} action={props.action} removeCard={props.removeCard} />
})

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {displayBots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;