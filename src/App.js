import './App.css';
import Header from './layouts/Header';
import Content from './layouts/Content';

function App() {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)', minHeight: '100vh' }}>
      <Header title="Eatwhat" />
      <Content />
    </div>
  );
}

export default App;
