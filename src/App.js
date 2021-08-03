import './App.css';
import Adress from './component/profile/Adress';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <FullName/>
    <Adress/>
   </div>
  );
}

export default App;
