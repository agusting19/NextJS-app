export const getTeams = async () => {
  const response = await fetch("http://api.football-data.org/v2/teams", {
    headers: {
      "X-Auth-Token": "8db0cc10dbc84eea919b4ae18574a72b",
    },
  });
  const data = await response.json();
  return data;
};
