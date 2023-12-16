import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addtodo } from "../Slice/TodoSlice";

export function Addtodo() {
    const Dispatch = useDispatch()
    const [input, setinput] = useState([])
    const handler = (e) => {
        e.preventDefault()
        Dispatch(addtodo(input))
        setinput('')
    }
    return (
        <>
            <div>
                <form onSubmit={handler}>
                    <input type="text"
                        value={input}
                        required
                        onChange={(e) => setinput(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}