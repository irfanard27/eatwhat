import './App.css';
import Header from './layouts/Header';
import Content from './layouts/Content';
import { useState } from 'react';

function App() {
  const [isTU, setIsTU] = useState(false)

  const onTimesUp = (data) => {
    setIsTU(data)
  }

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)', minHeight: '100vh' }}>
      <Header title="Eatwhat" timesUp={onTimesUp} />
      <Content isTimesUp={isTU} />
    </div>
  );
}

export default App;
