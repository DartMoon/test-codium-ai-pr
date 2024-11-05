import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [unusedState, setUnusedState] = useState(null);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleUnusedFunction = () => {
    console.log("This function is not used");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleUnusedFunction}>Unused Button</button>
    </div>
  );
}

export default App;
