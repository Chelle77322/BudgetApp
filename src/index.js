import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>
       <script type = "module" src = "./index.js"></script>
    </div>;
    
    ;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));