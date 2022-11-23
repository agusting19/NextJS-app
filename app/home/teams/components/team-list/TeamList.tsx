"use client";
import React, { useState } from "react";
import { Teams } from "../../models";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import styledComponents from "styled-components";

const CardContainer = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface Props {
  teams: Teams;
}

function TeamList({ teams }: Props) {
  const handleClick = (website: string) => {
    window.open(website, "_blank");
  };

  return (
    <>
      <CardContainer>
        {teams.map((team) => {
          return (
            <Card key={team.id}>
              <CardHeader title={team.name} />
              <Typography>
                <a href={`mailto:${team.email}`}>{team.email}</a>
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={team.crestUrl}
                alt={team.name + " logo"}
              />
              <CardActions disableSpacing>
                <Button size="small" onClick={() => handleClick(team.website)}>
                  Go To Website
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </CardContainer>
    </>
  );
}

export default TeamList;
