import logo from './logo.svg';
import './App.css';
// StarRating 컴포넌트를 import 한다
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      <StarRating starCount={5}/>
    </div>
  );
}

export default App;
