import { Grid } from "@mui/material";

export const GetHour = ({ title, url }) => {
  return (
    <Grid container>
      <Grid item className="card">
        <p>{title}hola</p>
        <img src={url} alt={title}></img>
      </Grid>
    </Grid>
  );
};
