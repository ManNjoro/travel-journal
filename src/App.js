// import logo from './logo.svg';
import './App.css';
import data from './components/data'
import Card from './components/Card'
import Navbar from './components/Navbar';

function App() {
  const cardElements = data.map(d => {
    return <Card 
      key = {d.id}
      {...d}
    />
  })
  return (
    <div className='app-container'>
      <section className="App">
        <Navbar />
        {cardElements}
      </section>
    </div>
  );
}

export default App;
