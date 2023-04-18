import { useState, useEffect } from "react";

const Card = () => {
  const URL = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      if (response.ok) {
        setAdvice(data);
        setLoading(false);
      } else {
        setAdvice({
          advice: "something went wrong, wait a bit and try again",
        });
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <h1>loading</h1>
  ) : (
    <div className="bg-blue">
        <h1 className="text-green m-4">ADVICE #{advice.slip.id}</h1>
      <h1 className="text-cyan">"{advice.slip.advice}."</h1>
    </div>
  );
};

export default Card;
