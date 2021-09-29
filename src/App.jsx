import './App.css';

import { Header, Mainpage, Service, Whyus, Projects, Partners } from './components' ;

function App() {
  return (
    <main className="App">
        <Header />
        <Mainpage />
        <Service />
        <Whyus />
        <Projects />
        <Partners />
    </main>
  );
}

export default App;
