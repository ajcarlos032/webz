export const teamSelector = (state) => state.team

export const teamsSelector = (state) => state.team.teams.data
export const teamsMeGuestIdsSelector = (state) => state.team.teams.ids
export const teamByIdSelector = (id) => (state) => state.team.teams.data[`team_${id}`]
