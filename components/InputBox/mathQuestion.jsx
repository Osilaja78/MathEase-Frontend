import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function MathInput() {

    // For asking questions
    const [response, setResponse] = useState(null);
    const [question, setQuestion] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const handleSubmit = async (event) => {
        setLoading(true)
        setError(null)
        event.preventDefault();

        try {
          const res = await axios.post('http://localhost:8000/ask-math', {
            question: question
          });
          setResponse(res.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
      console.log(question)

    let theError, loadingAnimation

    if (error) {
        theError = <div className='bg-red-200 p-8 border border-red-700 rounded-md text-red-800 w-max m-auto'>Something went wrong: {error.message}</div>;
    }

    if (loading) {
        loadingAnimation = <div>Loading...</div>;
      }

    return (
        <>
          <div className=' mx-4 bg-[#fffaeb] border-2 border-[#d9d9d9] rounded-[30px] sm:max-w-[900px] p-[30px] text-center sm:mx-auto mt-10 flex flex-col gap-y-6'>
            <p className=' text-[30px]'>Mathematics Input</p>
            {/* Input form */}
            <form onSubmit={handleSubmit}>
                <div className='flex border-2 border-orange-400 max-w-[450px] bg-white rounded-lg mx-auto mb-4'>
                <input value={question} onChange={(e) => setQuestion(e.target.value)} className=' w-full sm:w-[400px] p-4 outline-none' type="text" placeholder='Enter what you want to calculate'/>
                <button type='submit' className=' mr-3 text-white bg-orange-400 px-2 my-2 sm:mr-0 rounded-md text-[20px]'>=</button>
                </div>
                <i className=' text-gray-400'>Example "solve 3x - 15 = 10"</i>
            </form>
            <div className='answer-div bg-white p-10 border rounded-md'>
                <i className=' text-center text-gray-500'>Answer box</i>
                {error ? theError : null}
                <div className=' text-left text-[20px]'>
                  {response ? <pre><p>Short Answer: </p>{JSON.stringify(response.short_answer, null, 2)}</pre> : loadingAnimation}
                  <ul>
                    {response ? <p className='mt-4'>Long Answer: </p> : null}
                    {response ? response.long_answer && response.long_answer.map(answer => (
                      <li key={answer}>{answer}</li>
                    )) : null}
                  </ul>
                  {/* {response ? <pre><p>Solution: </p>{JSON.stringify(response.long_nswer, null, 2)}</pre> : null} */}
                </div>
            </div>
          </div>
        </>
    )
}