import { router , Link } from '@inertiajs/react'
function Person(props){
    return(
        <div className="p-2 grid grid-cols-[1fr_1fr] grid-rows-2 w-99vw h-32 border border-black m-4">

            <div className='row-start-1'>
                <h1 className="text-3xl row-start-1">{props.person.first_name}</h1>
                <p className="text-2xl">{props.person.last_name}</p>
            </div>

            <div className='row-start-1 col-start-2'>
                <img src='/Img/Arrow_Forward_Icon.png' alt='arrow_forword' width='30'></img>
                <p className="text-xl  ">{props.person.Arrived_at}</p>
            </div>
            
            <div className='row-start-2 col-start-2'>
                <img src='/Img/Arrow_Back_Icon.png' alt='arrow_back' width='30'></img>
                {props.person.Left_at == '1970-01-01 00:00:00' ? <p className=' text-xl '>Hasn't left the building</p> : <p className='text-xl'>{props.person.Left_at}</p>}
            </div>

        </div>
    )
}
export default Person