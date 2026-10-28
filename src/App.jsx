import InfoPerso from './components/InfoPerso'
import Competences from './components/Competences'
import Experiences from './components/Experiences'
import './App.css'

function App() {
  return (
    <div className="cv">
      <InfoPerso />
      <Competences />
      <Experiences />
    </div>
  )
}

export default App
