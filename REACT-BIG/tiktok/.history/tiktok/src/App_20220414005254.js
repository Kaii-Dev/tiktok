import {useSate} from 'react';

function App() {
  const [count, setCount] = useSate(1);
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}

export default App;