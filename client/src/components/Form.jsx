import React, { useState } from 'react';

const Form = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [designer, setDesigner] = useState("");
  const [yarn, setYarn] = useState("");
  const [needles, setNeedles] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [completed, setCompleted] = useState(false);
  const [img, setImg] = useState("");
  const [projects, setProjects] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    addProject()
    console.log(projects);
  }

  const handleChange = e => {
    setTitle(e.target.value);
    setDesigner(e.target.value);
    setYarn(e.target.value);
    setNeedles(e.target.value);
    setStart(e.target.value);
    setEnd(e.target.value);
    setCompleted(e.target.value);
    setImg(e.target.value)
  }

  const resetForm = () => {
    setTitle('');
    setDesigner('');
    setYarn('');
    setNeedles('');
    setStart('');
    setEnd('');
    setCompleted(false);
    setImg('')
  }

  const addProject = () => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        designer: designer,
        yarn: yarn,
        needles: needles,
        start: start,
        end: end,
        completed: 0,
        img: img
      })
    };
    fetch("/api/projects", options)
    .then(res => res.json())
    .then(data => {
      setProjects(data)
      setTitle('');
      setDesigner('');
      setYarn('');
      setNeedles('');
      setStart('');
      setEnd('');
      setCompleted(false);
      setImg('')
    })
 
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label>title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>designer</label>
        <input type="text" required value={designer} onChange={(e) => setDesigner(e.target.value)} />

        <label>yarn</label>
        <input type="text" required value={yarn} onChange={(e) => setYarn(e.target.value)} />

        <label>needles</label>
        <input type="text" required value={needles} onChange={(e) => setNeedles(e.target.value)} />

        <label>start</label>
        <input type="date" required value={start} onChange={(e) => setStart(e.target.value)} />

        <label>end</label>
        <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />

        <label>add image</label>
        <input type="url" value={img} onChange={(e) => setImg(e.target.value)} />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  )

};

export default Form