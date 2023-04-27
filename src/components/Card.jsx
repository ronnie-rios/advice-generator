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
    <div className="bg-blue p-4 rounded-sm">
      <h1 className="text-green m-4">ADVICE #{advice.slip.id}</h1>
      <h1 className="text-cyan">"{advice.slip.advice}"</h1>
      <div className=" p-4 m-auto left-0 right-0">
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <div className="bg-green p-4 rounded-full w-14 absolute m-auto left-0 right-0">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
