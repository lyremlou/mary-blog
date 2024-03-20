import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title="Welcome to the new blog";
  const likes = 50;
  const link = "http://www/google.com";
  return (
    <div className="App">
      <Navbar/>
     <div className="content">
      <Home/>
      <h1>{title}</h1>
      <p>Liked {likes} times!</p>
      <p>{"Buffy the Vampire Slayer is the best tv show in the world!"}</p>
      <p>{Math.random() *100}</p>
      <p>{["apples", "oranges", "bananas"]}</p>

      <a href={link}>Google site </a>
      
    
     </div>
    </div>
  );
}

export default App;
