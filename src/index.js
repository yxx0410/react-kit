import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  const [state, setState] = React.useState(false)
  return (
    <div>hello react</div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
