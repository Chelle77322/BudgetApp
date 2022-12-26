import React from 'react';
import ReactDOM from 'react-dom';
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);
const element = document.createElement('root')
element.innerHTML = (__dirname + "public/index.html")

class App extends React.Component {
  render() {
    return element;

    
    
    ;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));