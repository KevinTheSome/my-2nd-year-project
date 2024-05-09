import Saidbar from '../Components/Saidbar'
import Person from '../Components/Person'
import { router , Link, usePage , Head } from '@inertiajs/react'
import { useState } from 'react'

const Dashboard = () => {
  const [errors , setErrors] = useState([])
  const {people} = usePage().props;
  const {searchPeople} = usePage().props;
  const [search , setSearch] = useState("")

  const peopleJSX = people.map((person, key) => {
    return (
      <Person person={person} key={key} />
    )
  })

  const errorsJSX = errors.map((error, key) => {
    return (
      <p key={key} className='text-red-500 text-3xl'>{error}</p>
    )
  })

  function handleSubmitSearch(e) {
    e.preventDefault()
    if(search == ""){
        router.visit('/dashboard/history')
    }else{
      router.post('/dashboard/inbuilding/search', {search: search},{
        forceFormData: true,
      })
      setErrors([])
      setSearch("")
      console.log(people)
    }
  }

    return (
      <>
        <Head title="Inbuilding" />
        <div className='v-screen h-screen grid max-sm:grid-cols-[64px_1fr] max-md:grid-cols-[150px_1fr] grid-cols-[256px_1fr]'>
          <Saidbar />
            <div>
                <form onSubmit={handleSubmitSearch} className='p-4'>
                    <input type="text" placeholder='name' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit" className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>Search</button>
                </form>
                {errorsJSX}
                {peopleJSX}
            </div>

          </div>
      </>
    )
  }
  
export default Dashboard