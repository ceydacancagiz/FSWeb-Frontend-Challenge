import './App.css'
import { Header } from './components/Header'
import { Skills } from './components/Skills';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className={`App dark:bg-dark-bg bg-white}`}>
      <ToastContainer />
      <Header />
      <Introduction/>
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
