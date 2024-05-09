import { router , Link } from '@inertiajs/react'
function Person(props){

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/dashboard/leave', {'id' : props.person.id},{
          forceFormData: true,
        })
    }

    return(
        <>
            {props.person.Left_at != '1970-01-01 00:00:00' ? null :         
            <div className="p-2 grid grid-cols-[2fr_1fr] grid-rows-3 w-99vw h-32 border border-black m-4 max-sm:m-1 max-sm:p-1">
                <h1 className="text-3xl max-md:text-lg max-sm:text-xl row-start-1">{props.person.first_name}</h1>
                <p className="text-3xl max-md:text-lg max-sm:text-xl row-start-2">{props.person.last_name}</p>
                <p className="text-xl max-md:text-xs max-sm:text-xs row-start-3">{props.person.sex}</p>
                
                <form method="post" onSubmit={handleSubmit} className='row-start-1 row-end-4 grid justify-center content-center'>
                    <input type="hidden" name="id" value={props.person.id} />
                    <button type='submit' className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded max-sm:h-16 max-sm:w-36 h-20 w-40'>Exited</button>
                </form>

            </div>
            }
        </>
    )
}
export default Person