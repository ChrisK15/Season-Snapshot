"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { nbaTeams } from "./teams";

export default function Home() {
  // STATES
  const [team, setTeam] = useState("");
  const [teamNames, setTeamNames] = useState([]);
  const [open, setOpen] = useState("");

  // API stuff
  useEffect(() => {
    const getTeamNames = async () => {
      try {
        const response = await axios.get("/api/proxy/"); // calls API
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching team names:", err);
      }
    };

    getTeamNames();
  }, []);

  // FUNCTIONS
  const handleChange = (e) => {
    setTeam(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant='h1'>Season Snapshot</Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id='team-select-label'>Team</InputLabel>
          <Select
            labelId='team-select-label'
            id='team-select'
            value={team}
            onChange={handleChange}
            autoWidth
            label='Team'
          >
            {nbaTeams.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant='contained'
          size='small'
          disableElevation
          onClick={null}
        >
          Open
        </Button>
      </div>
    </div>
  );
}
