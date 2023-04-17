import { useState, useEffect } from 'react'

const Card = () => {
    const URL = "https://api.adviceslip.com/advice";
    const [advice, setAdvice] = useState({});
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            if (response.ok) {
                setAdvice(data);
                setLoading(false) ;
            } else {
                setAdvice({
                    advice: 'something went wrong, wait a bit and try again'
                })
            }
        };
        fetchData();
    }, []);
    console.log(advice);


  return loading ? <h1>loading</h1> : (
    <div>
        <h1>{advice && advice.slip.advice}</h1>
    </div>
  )
}

export default Card;