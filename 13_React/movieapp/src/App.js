import './App.css';
import Banner from './components/Banner';
import Favourites from './components/Favourites';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      {/* <Banner/>
      <MovieList/> */}
      <Favourites/>
    </>
    
  );
}

export default App;
  