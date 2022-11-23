import React from "react";
import { Teams } from "../../models";

interface Props {
  teams: Teams;
}

function TeamList({ teams }: Props) {
  return (
    <div>
      {teams.map((team) => {
        return <p key={team.id}>{team.name}</p>;
      })}
    </div>
  );
}

export default TeamList;
