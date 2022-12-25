import './App.css';
import data from './data'
import React,{ useState } from 'react';
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Question and answers about login</h3>
        <section className="info">
          {questions.map((question)=>{
            // console.log(question)
            return (<SingleQuestion key={question.id} {...question}></SingleQuestion>)
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
