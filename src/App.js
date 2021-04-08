import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContentWrapper from './components/Content/components';
import Header from './components/Header/header';
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ContentWrapper 
        state={props.state}
        dispatch={props.dispatch}
        />
      </BrowserRouter>
    </div>
  );
}
export default App;