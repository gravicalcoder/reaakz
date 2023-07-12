import { useEffect, useState } from 'react'

export default function People()
{
    const [ people, setPeople ] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Sudo' },
        { id: 4, name: 'Boy' },
        { id: 5, name: 'Udin' },
        { id: 6, name: 'Parjo' },
        { id: 7, name: 'Emen' }
    ])

    const getPeople = async () =>
    {
        //const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await fetch('user.json')  //taroh di folder public
        const result = await response.json()
        setPeople(result)
    }

        
    useEffect(() =>
    {
        getPeople()
    }, [])
    


    return <div>
        <h2>People</h2>

        <ul>
            { people.map(person => 
                <li key={ person.id }>{ person.name }</li>
            ) }
        </ul>
    </div>
}