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
        <div className='v-screen h-screen grid max-sm:grid-cols-[64px_1fr] max-md:grid-cols-[150px_1fr] grid-cols-[256px_1fr]'>
          <Saidbar />

          <div>
            <div className='h-32 max-sm:felx max-sm:h-16'>
            <form methid="post" onSubmit={handleSubmit} className='p-4 max-sm:p-1 max-md:grid max-sm:grid max-sm:grid-cols-1 max-sm:grid-rows-4 max-sm:gap-1'>
              <input type="text" placeholder="first name" name='first_name' value={addPerson.first_name} onChange={(e) => setAddPerson({ ...addPerson, first_name: e.target.value })} required/>
              <input type="text" placeholder="last name" name='last_name' value={addPerson.last_name} onChange={(e) => setAddPerson({ ...addPerson, last_name: e.target.value })} required/>
              <select name="sex" id="sex"  value={addPerson.sex} onChange={(e) => setAddPerson({ ...addPerson, sex: e.target.value })} required>
                <option>Choose sex</option>
                <option value="Male">Male</option>
                <option value="Femail">Femail</option>
                <option value="Transgender">Transgender</option>
                <option value="Helihopter">Helihopter</option>
              </select>
              <button type="submit" className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded max-sm:py-1 max-sm:px-2'>Add</button>
              {errors}
            </form>
            </div>

            <div className='grid max-sm:pt-[120px] max-md:pt-[60px]'>
              {peopleJSX}
            </div>

          </div>
        </div>
      </>
    )
  }
  
export default Dashboard