import React from "react";
import { json } from "stream/consumers";
import { TeamList } from "./components";
import { getTeams } from "./services/teams.services";

async function Teams() {
  const data = await getTeams();

  return (
    <div>
      <TeamList teams={data.teams} />
    </div>
  );
}

export default Teams;
