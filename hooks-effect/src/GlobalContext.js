import {useState, createContext, useContext} from 'react'
import Component2 from './Component2';

function GlobalContext(){
    const [count, setCount] = useState(10)
    return (
        <>
            <UserContext.Provider value = {count}>
                <h1>Helloo {count}</h1>
                <Component2/>
            </UserContext.Provider>
        </>
    )
}
export const UserContext = createContext(0)
export default GlobalContext