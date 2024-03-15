import { Game } from './components/Game';
import { Header } from './components/Header';

function App() {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <Game solution='POOCH' />
    </div>
  );
}

export default App;
