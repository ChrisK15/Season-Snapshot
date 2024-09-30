import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const headers = {
      accept: 'application/json',
    };
    // LIST OF TEAMS
    const teamListResponse = await axios.get(
      'https://api.sportradar.com/nba/trial/v8/en/league/teams.json?api_key=8SvrEWC5SYO5N1Vu8WnNdGMCpaC3WZggnFmSp0vD',
      { headers }
    );
    const teams = teamListResponse.data.teams;

    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching data' },
      { status: 500 }
    );
  }
}
