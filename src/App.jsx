import './App.css'
import Person from "./Person";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header appName="HR App"/>
      <div className="person">
      <Person name="Makar Patapau" title="Student" salary={3000} phone="+358411234567" email="makar@gmail.com" animal="Eagle"/>
      <Person name="Makar Patapau" title="Student" salary={3000} phone="+358411234567" email="makar@gmail.com" animal="Eagle"/>
      <Person name="Makar Patapau" title="Student" salary={3000} phone="+358411234567" email="makar@gmail.com" animal="Eagle"/>
      </div>
      <Footer name="REACT25K"/>
    </div>
  )
 
};

export default App;
