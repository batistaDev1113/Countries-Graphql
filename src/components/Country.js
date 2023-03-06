import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Country = ({ country }) => {
  const { name, emoji, capital, code, currency, continent } = country[0];
  const [flagSource, setFlagSource] = useState("");
  const flagUrl = "https://www.worldometers.info/img/flags/";

  useEffect(() => {
    setFlagSource(flagUrl + code);
  }, [code, country]);

  return (
    <Card>
      <CardMedia
        sx={{ width: 300, height: 200, objectFit: "cover" }}
        image={`${flagSource.toLowerCase()}-flag.gif`}
        title={`${code} flag image`}
      />
      <CardContent>
        <List space={2}>
          <ListItem
            alignItems="flex-start"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <ListItemText>
              <Typography textAlign="center">
                <label>
                  <strong>Country:</strong>
                </label>
                <br />
                {name}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography textAlign="center">
                <label>
                  <strong>Capital:</strong>
                </label>
                <br />
                {capital}
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            alignItems="flex-start"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <ListItemText>
              <Typography textAlign="center">
                <label>
                  <strong>Continent:</strong>
                </label>
                <br />
                {continent.name}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography textAlign="center">
                <label>
                  <strong>Currency:</strong>
                </label>
                <br />
                {currency}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Country;
