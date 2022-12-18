import logo from './logo.svg';
import './App.css';

function DataButton(props) {
  function onclick(e) {
    fetch('http://127.0.0.1:5000/data')
    .then(resp => resp.json())
    .then( json => {
      console.log(json);
    }
    ).catch(e => console.log(e))
  }
  return (
    <button onClick={onclick}>Data</button>
  )
}

function UploadButton(props) {

  function onclick(e) {
    fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body: JSON.stringify({a: 1})
    })
    .then(resp => resp.json())
    .then( json => {
      console.log(json);
    }
    ).catch(e => console.log(e))
  }
  return (
    <button onClick={onclick}>Upload</button>
  )
}

function App() {
  const name = 'Zhifan';
  return (<>
    <p>{name}</p>
    <DataButton />
    <UploadButton />
  </>)
}


export default App;
