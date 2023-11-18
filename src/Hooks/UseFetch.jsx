import { useEffect, useState } from "react";
import axios from "axios";

export default function UseFetch(url) {
  const [data, setData] = useState([]);
  const [error, seterror] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        seterror(error);
      });
  }, []);

  return { data, error };
}
