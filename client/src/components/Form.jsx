import React, { useState } from 'react';

const Form = ({ createProject }) => {
  const [title, setTitle] = useState("");
  const [designer, setDesigner] = useState("");
  const [yarn, setYarn] = useState("");
  const [needles, setNeedles] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [completed, setCompleted] = useState();
  const [img, setImg] = useState("");

  const handleSubmit = async () => {
    const payload = {
      title,
      designer,
      yarn,
      needles,
      start,
      end,
      completed,
      img
    }; 

    try {
      await createProject(payload);
      resetForm();
    } catch(error) {
      console.error('failed to create project:', error)
    }
  }

  const resetForm = () => {
    setTitle('');
    setDesigner('');
    setYarn('');
    setNeedles('');
    setStart('');
    setEnd('');
    setCompleted();
    setImg('')
  }

  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
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

        <label>completed</label>
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.value)} />

        <label>add image</label>
        <input type="url" value={img} onChange={(e) => setImg(e.target.value)} />
        <button onClick={handleSubmit}>SUBMIT</button>
      </form>
    </>
  )

};

export default Form