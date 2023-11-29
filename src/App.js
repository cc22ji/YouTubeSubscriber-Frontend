import logo from './logo.svg';
import './App.css';

import SuscriberPage from './components/suscriberPage';
import Background from './components/backgroung';

function App() {
  return (
    <div className="App">
       <Background>
         <SuscriberPage />
         </Background>
    </div>
  );
}

export default App;
