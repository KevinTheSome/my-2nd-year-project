import Saidbar from '../Components/Saidbar'
import Person from '../Components/Person'
import { router , Link, usePage , Head } from '@inertiajs/react'
import { useState } from 'react'

const Dashboard = () => {
  const [errors , setErrors] = useState([])
  const {people} = usePage().props;
  const [addPerson, setAddPerson] = useState({
    first_name: "",
    last_name: "",
    sex: "",
  });

  function handleSubmit(e) {
    e.preventDefault()
    if(addPerson.first_name == "" || addPerson.last_name == "" || addPerson.sex == ""){
      setErrors(["All fields are required"])
    }else{
      router.post('/dashboard/add', addPerson,{
        forceFormData: true,
      })
      setErrors([])
      setAddPerson({first_name : "" , last_name : "" , sex : "" })
      console.log(people)
    }

  }

  const peopleJSX = people.map((person, key) => {
    return (
      <Person person={person} key={key} />
    )
  })

  const errorsJSX = errors.map((error, key) => {
    return (
      <p className='text-red-500 text-3xl'>{error}</p>
    )
  })

    return (
      <>
        <Head title="Dashboard" />
        <div className='v-screen h-screen grid grid-cols-[256px_1fr]'>
          <Saidbar />

          <div>
            <div className='h-32'>
            <form methid="post" onSubmit={handleSubmit} className='p-4'>
              <input type="text" placeholder="first name" name='first_name' value={addPerson.first_name} onChange={(e) => setAddPerson({ ...addPerson, first_name: e.target.value })} required/>
              <input type="text" placeholder="last name" name='last_name' value={addPerson.last_name} onChange={(e) => setAddPerson({ ...addPerson, last_name: e.target.value })} required/>
              <select name="sex" id="sex"  value={addPerson.sex} onChange={(e) => setAddPerson({ ...addPerson, sex: e.target.value })} required>
                <option>Choose sex</option>
                <option value="Male">Male</option>
                <option value="Femail">Femail</option>
                <option value="Transgender">Transgender</option>
                <option value="Helihopter">Helihopter</option>
              </select>
              <button type="submit" className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>Add</button>
              {errors}
            </form>
            </div>

            <div>
              {peopleJSX}
            </div>

          </div>
        </div>
      </>
    )
  }
  
export default Dashboard