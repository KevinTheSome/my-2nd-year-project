import { Link } from '@inertiajs/react'
function Person(props){

    return(
        <div className="p-2 grid grid-cols-[2fr_1fr] grid-rows-3 w-99vw h-32 border border-black m-4">
            <h1 className="text-2xl row-start-1">{props.person.first_name}</h1>
            <p className="text-xl row-start-2">{props.person.last_name}</p>
            <p className="text-xs row-start-3">{props.person.sex}</p>
            <Link as='button' name='id' value={props.person.id} method='post' href={`/dashboard/leave`} className="row-start-1 row-end-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Exited</Link>
        </div>
    )
}
export default Person