import { Link } from 'react-router-dom';

import '../styles/App.css'

function App() {
  return (
    <div className="homePage">
      <h1>Home page</h1>
      <Link to="shop">Shop</Link>
    </div>
  )
}

export default App;
