"use client";
import React, { useState } from "react";
import { Teams } from "../../models";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import styledComponents from "styled-components";

const CardContainer = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PaginationContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface Props {
  teams: Teams;
}

function TeamList({ teams }: Props) {
  const [onDisplay, setOnDisplay] = useState(teams.slice(0, 5));

  const handleClick = (website: string) => {
    window.open(website, "_blank");
  };

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const beginning = page - 1;
    const final = beginning + 5;

    setOnDisplay(teams.slice(beginning, final));
  };

  return (
    <PaginationContainer>
      <CardContainer>
        {onDisplay.map((team) => {
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
      <Pagination
        count={teams.length}
        onChange={handlePagination}
        color="primary"
      />
    </PaginationContainer>
  );
}

export default TeamList;
