import React, { useEffect, useState } from 'react';

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch('http://localhost/api/index.php')
      .then(response => response.json())
      .then(data => setWords(data));
  }, []);

  return (
    <div>
      <h1>English Words and Etymology</h1>
      <ul>
        {words.map(word => (
          <li key={word.word}>
            {word.word}: {word.etymology}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

