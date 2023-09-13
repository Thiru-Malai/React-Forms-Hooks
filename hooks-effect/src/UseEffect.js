import { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [clickcount, setClickCount] = useState(0);
    const [propCount, setPropCount] = useState(0);
    
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
        return() => clearTimeout(timer);

    }, []);
    
    useEffect(() => {
        document.title = `You have clicked ${clickcount} times`
    })

    useEffect(()=>{
        setPropCount(()=>clickcount*2)
    }, [clickcount])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setClickCount((clickcount) => clickcount + 1)}}>Helloo</button>
            <h1>Calculation {propCount}</h1>
        </>
    )


}


export default UseEffect;