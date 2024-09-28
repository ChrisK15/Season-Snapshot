'use client';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  // STATES
  const [team, setTeam] = useState('');
  // const [open, setOpen] = useState('');

  // FUNCTIONS
  const handleChange = (e) => {
    setTeam(e.target.value);
  };

  const getTeam = async () => {
    // Call the local API route
    const response = await axios.get('/api/proxy');
    //setData(response.data);
    console.log(response.data);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h1'>Season Snapshot</Typography>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
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
            <MenuItem value={1}>Lakers</MenuItem>
            <MenuItem value={2}>Bulls</MenuItem>
            <MenuItem value={3}>Warriors</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant='contained'
          size='small'
          disableElevation
          onClick={getTeam}
        >
          Open
        </Button>
      </div>
    </div>
  );
}
