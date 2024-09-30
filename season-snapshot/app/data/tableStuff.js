export const columns = [
  { field: "points", headerName: "Points", width: 100 },
  { field: "three_points_made", headerName: "Three-Pointers Made", width: 90 },
  { field: "field_goals_made", headerName: "ID", width: 90 },
  { field: "assists", headerName: "ID", width: 90 },
  { field: "rebounds", headerName: "ID", width: 90 },
  { field: "steals", headerName: "ID", width: 90 },
  { field: "blocks", headerName: "ID", width: 90 },
  { field: "turnovers", headerName: "ID", width: 90 },
  { field: "fast-break-pts", headerName: "ID", width: 90 },
  { field: "second-chance-pts", headerName: "ID", width: 90 },
  { field: "bench-points", headerName: "ID", width: 90 },
];

export function createColumns(
  points,
  three_points_made,
  field_goals_made,
  assists,
  rebounds,
  steals,
  blocks,
  turnovers,
  fast_break_pts,
  second_chance_pts,
  bench_points
) {
  return {
    points,
    three_points_made,
    field_goals_made,
    assists,
    rebounds,
    steals,
    blocks,
    turnovers,
    fast_break_pts,
    second_chance_pts,
    bench_points,
  };
}
