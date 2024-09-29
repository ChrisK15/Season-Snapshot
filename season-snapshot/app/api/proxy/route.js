import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "https://api.sportradar.com/nba/trial/v8/en/league/teams.json?api_key=8SvrEWC5SYO5N1Vu8WnNdGMCpaC3WZggnFmSp0vD"
    );

    // team names for list of teams
    const teams = response.data.teams;

    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 }
    );
  }
}
