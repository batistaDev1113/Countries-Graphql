import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Country = ({ country }) => {
  const { name, emoji, capital, code } = country[0];
  const [flagSource, setFlagSource] = useState("");
  const flagUrl = "https://www.worldometers.info/img/flags/";

  useEffect(() => {
    console.log("country received is: ", country[0].code);
    setFlagSource(flagUrl + code);
  }, [code, country]);

  console.log(flagSource);
  return (
    <Card sx={{ width: 375, height: 400, margin: "auto" }}>
      <CardMedia
        sx={{ width: 375, height: 200 }}
        image={`${flagSource.toLowerCase()}-flag.gif`}
        title={`${code} flag image`}
      />
      <CardContent>
        <Typography>
          <strong>Country:</strong> {name}
        </Typography>
        <Typography>
          <strong>Capital:</strong> {capital}
        </Typography>
        <Typography>Country: {name}</Typography>
      </CardContent>
    </Card>
  );
};

export default Country;
