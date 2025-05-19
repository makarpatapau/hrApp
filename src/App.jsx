import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import PersonsList from './PersonsList';

function App() {
  return (
    <div>
      <Header appName="HR App"/>
      <main>
      <div className="person">
      <PersonsList />
      </div>
      </main>
      <Footer name="REACT25K"/>
    </div>
  )
 
};

export default App;
