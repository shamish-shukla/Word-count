import React, { useEffect, useState } from "react";
import "../src/App.css";

function App() {
  const[text,setText] = useState('');
  const[wordCount,setWordCount] = useState(0);
  function counter(event){
    setText(event.target.value);
  }
  useEffect(()=>{
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) =>{
      if(word.trim() !== '')
      {
        wordCount ++;
      }
    })
    setWordCount(wordCount);
    
  })
  return (
    <div className="App">
      <div className="span-app">
         <h2>Responsive Paragraph counter</h2>
         <textarea onChange={counter}></textarea>
         <p>Total Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
