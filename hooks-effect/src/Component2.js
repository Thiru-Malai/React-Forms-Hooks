import {useContext} from 'react'
import { UserContext} from './GlobalContext';

function Component2(){
    const user = useContext(UserContext)
    return (
        <>
            {user}
        </>
    )
}
export default Component2;