import logo from './logo.svg';
import './App.css';

import { CounterContainer } from './counter/counter-container';
import { ArrayContainer } from './array/array-container';
import { FakeStoreContainer } from './fake-store/fake-store-container';

function App() {
  return (
    <>
      <CounterContainer />
      <ArrayContainer />
      <FakeStoreContainer />
    </>
  );
}

export default App;
