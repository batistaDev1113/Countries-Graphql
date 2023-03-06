import "./styles.css";
import { useLazyQuery, useQuery, gql } from "@apollo/client";
import Countries from "./components/Countries";
import Loader from "./components/Loader";

const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      code
      name
      capital
      emoji
      currency
      continent {
        name
      }
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <Countries countries={data.countries && data.countries} />
    </div>
  );
}
