import Saidbar from '../Components/Saidbar'
import Person from '../Components/Person'
import { router , Link, usePage , Head } from '@inertiajs/react'
import { useState } from 'react'

const Dashboard = () => {
  const [errors , setErrors] = useState([])
  const {people} = usePage().props;

  const peopleJSX = people.map((person, key) => {
    return (
      <Person person={person} key={key} />
    )
  })

    return (
      <>
        <Head title="Inbuilding" />
        <div className='v-screen h-screen grid grid-cols-[256px_1fr]'>
          <Saidbar />
            <div>
              {peopleJSX}
            </div>

          </div>
      </>
    )
  }
  
export default Dashboard