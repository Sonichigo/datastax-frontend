import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import CreateFeed from './components/CreateFeed';
import Tasks from './components/Tasks';
import Grid from '@react-css/grid'

function App() {
  return (
    <div className="App">
      <Header/><br/>
      <Grid columns='20% auto 20%' gap='1em'>
      <Sidebar/>
      <CreateFeed/>
      <Tasks/>
      </Grid>
      </div>
  );
}

export default App;
