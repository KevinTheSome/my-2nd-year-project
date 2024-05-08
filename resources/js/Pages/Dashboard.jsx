import Saidbar from '../Components/Saidbar'
import { router , Link, usePage } from '@inertiajs/react'
import { useState } from 'react'

const Dashboard = () => {

  const [addPerson, setAddPerson] = useState({
    first_name: "",
    last_name: "",
    sex: "",
  });

  function addperson(e) {
    e.preventDefault()
    router.post('/dashboard', addPerson)
  }

  


    return (
      <>
        <div className='v-screen h-screen grid grid-cols-[255px_1fr]'>
          <Saidbar />

          <section>
          <form onSubmit={addPerson}>
            <input type="text" placeholder="first name" name='first_name' value={addPerson.first_name} onChange={(e) => setAddPerson({ ...addPerson, first_name: e.target.value })}/>
            <input type="text" placeholder="last name" name='last_name' value={addPerson.last_name} onChange={(e) => setAddPerson({ ...addPerson, last_name: e.target.value })}/>
            <select name="sex" id="sex" value={addPerson.sex}>
              <option value="male">Male</option>
              <option value="femail">Femail</option>
              <option value="femail">Transgender</option>
              <option value="femail">Helihopter</option>
            </select>
            <button type="submit">Add</button>
          </form>
          </section>

        </div>
      </>
    )
  }
  
export default Dashboard