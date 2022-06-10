import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import Foot from './components/Foot';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Head />
        <Body />
        <Foot />
      </div>
    </div>
  );
}
export default App;
