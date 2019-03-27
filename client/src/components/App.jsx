import React from 'React';
import Header from './Header.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      repos: []
    }
  }

  render() {
    return (
      <div><Header /></div>
    )
  }
}

export default App;