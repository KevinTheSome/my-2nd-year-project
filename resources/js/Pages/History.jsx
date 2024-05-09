import Saidbar from '../Components/Saidbar'
import HistoryPerson from '../Components/HistoryPerson'
import {usePage , Head } from '@inertiajs/react'
import { useState } from 'react'

const Dashboard = () => {
  const {people} = usePage().props;

  const peopleJSX = people.map((person, key) => {
    return (
      <HistoryPerson person={person} key={key} />
    )
  })


    return (
      <>
        <Head title="History" />
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