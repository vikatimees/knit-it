import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form.jsx'
import ProjectList from './components/ProjectList.jsx'

function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [isForm, setIsForm] = useState(false);
  

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        setError(error)
      });
  }, []);

  const showForm = () => [
    setIsForm(!isForm)
  ]


  return (
    <>
      <header>
        <button onClick={showForm}>
          {isForm ? 'projects' : 'add new'}  
        </button> 
        hello
      </header>
      
      <div className="view">
        {isForm ? <Form createProject /> : <ProjectList projects={projects} />}
      </div>
    </>
  )
}

export default App
