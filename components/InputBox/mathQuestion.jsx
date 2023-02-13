import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function MathInput() {

    
    // For asking questions
    const [response, setResponse] = useState(null);
    const [question, setQuestion] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const res = await axios.post('http://localhost:8000/ask-math', {
            question: question
          });
          setResponse(res.data);
        } catch (err) {
          setError(err);
        }
      };
      console.log(question)

    let theError, loading

    if (error) {
        theError = <div>Something went wrong: {error.message}</div>;
    }

    if (!response) {
        loading = <div>Loading...</div>;
      }
//   const [questions, setQuestions] = useState("")
  
//   const submitQuestions = async () => {
//     const response = await fetch('localhost:8000/ask-math', {
//       method: 'POST',
//       body: JSON.stringify({ questions }),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//     const data = await response.json()
//     console.log(data)
//   }

    return (
        <>
          <div className=' mx-4 bg-[#fffaeb] border-2 border-[#d9d9d9] rounded-[30px] sm:max-w-[900px] p-[30px] text-center sm:mx-auto mt-10 flex flex-col gap-y-6'>
            <p className=' text-[30px]'>Mathematics Input</p>
            {/* Input form */}
            <form onSubmit={(e) => handleSubmit}>
                <div className='flex border-2 border-orange-400 max-w-[450px] bg-white rounded-lg mx-auto mb-4'>
                <input value={question} onChange={(e) => setQuestion(e.target.value)} className=' w-full sm:w-[400px] p-4 outline-none' type="text" placeholder='Enter what you want to calculate'/>
                <button type="submit" className=' mb-3 mr-3 text-white bg-orange-400 px-2 mt-2 pb-1 sm:mb-0 sm:mr-0 rounded-md text-[20px]'>=</button>
                </div>
                <i className=' text-gray-400'>Example "solve 3x - 15 = 10"</i>
            </form>
            <div className='answer-div bg-white p-10 border rounded-md'>
                <i className=' text-center text-gray-500'>Answer box</i>
                {error ? theError : null}
                {!response ? loading: null}
                <div className=' text-left text-[20px]'>
                    {!response ? null : <pre><p>Short Answer: </p>{JSON.stringify(response.short_nswer, null, 2)}</pre>}
                    {!response ? null : <pre><p>Solution: </p>{JSON.stringify(response.long_nswer, null, 2)}</pre>}
                </div>
            </div>
          </div>
        </>
    )
}