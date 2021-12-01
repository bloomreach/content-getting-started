import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {BrPage} from "@bloomreach/react-sdk";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BrPage configuration={{
          endpoint: 'https://trial-n7r2nj4o.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
          httpClient: axios
        }} mapping={{Content}}>
        </BrPage>

      </header>
    </div>
  );
}

function Content({component, page}) {

  const document = page?.getDocument();

  if (!document) {
    return null;
  }

  const {title, content, introduction} = document.getData();

  return (
      <>
        <h1>{title}</h1>
        <p>{introduction}</p>
        <div dangerouslySetInnerHTML={{__html: content.value}}/>
      </>
  );
}

export default App;
