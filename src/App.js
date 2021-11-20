import { Switch,Route } from 'react-router-dom';
import './App.css';
import Input from "./components/Input"
import Fetch from './components/Fetch';


function App() {
  return (
    <div className="App">
        <Input/>
        <Switch>
          <Route exact path="/:category/:id" render={() =>(
            <div>
              <Fetch/>
            </div>
          )}/>
        </Switch>
        
    </div>
  );
}

export default App;
