import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {BrPage} from "@bloomreach/react-sdk";
import {getContainerItemContent} from "@bloomreach/spa-sdk";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <BrPage configuration={{
                    path: `${window.location.pathname}${window.location.search}`,
                    endpoint: 'https://kenan.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
                    httpClient: axios
                }} mapping={{Content, MyComponent, MyContentComponent}}>
                </BrPage>

            </header>
        </div>
    );
}

function MyContentComponent({component, page}) {

    const {richText, multiple} = getContainerItemContent(component, page);

    return (
        <div>
            <h3>{component.getName()}</h3>
            {multiple.map(string => <h4>{string}</h4>)}
            <div dangerouslySetInnerHTML={{__html: richText.value}}/>
        </div>
    );
}

function MyComponent({component, page}) {

    const {title, showTitle} = component.getParameters();

    return (
        <div>
            <h3>{component.getName()}</h3>
            {showTitle && <h3>{title}</h3>}
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
        <div>
            <h1>{title}</h1>
            <p>{introduction}</p>
            <div dangerouslySetInnerHTML={{__html: content.value}}/>
        </div>
    );
}

export default App;
