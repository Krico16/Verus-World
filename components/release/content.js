import { useState } from 'react'

const ReleaseContent = ({ }) => {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <p>Numero: {counter}</p>
            <button onClick={increase}>AUMENTAR</button>
        </>
    )
}

export default ReleaseContent