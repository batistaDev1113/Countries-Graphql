import { useState, useEffect } from "react";
import Country from "./Country";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

const Countries = ({ countries }) => {
  const [country, setCountry] = useState("United States");
  const [countryToPass, setCountryToPass] = useState("");

  useEffect(() => {
    setCountryToPass(countries.filter((ctn) => ctn.name === country));
  }, [country, countries]);

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  console.log(country);

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
      <Grid item>
        <FormControl>
          <InputLabel id="demo-countries-graphql">Countries</InputLabel>
          <Select
            slotProps={{
              listbox: {
                sx: {
                  "--List-decorator-size": "48px"
                }
              }
            }}
            sx={{
              minWidth: 240
            }}
            aria-label="select from a country list"
            labelId="demo-countries-graphql"
            id="demo-countries"
            value={country}
            label="Countries"
            onChange={changeCountry}
          >
            {countries &&
              countries.map((country) => (
                <MenuItem key={country.code} value={country.name}>
                  {country.name + " " + country.emoji}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>{countryToPass && <Country country={countryToPass} />}</Grid>
    </Grid>
  );
};

export default Countries;
