import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "../Slice/TodoSlice";
import TodoSlice from "../Slice/TodoSlice";

export function Todos() {
    const alltodo = useSelector((state) => { return state.Todos })
    const Dispatch = useDispatch()

    return (
        <>
            {alltodo.map((eachtodo) => {
                return (
                    <li key={eachtodo.id}>
                        {eachtodo.Text}
                        <button onClick={() => Dispatch(removetodo(eachtodo.id))}>x</button>
                    </li>
                )
            }
            )}
        </>
    )
}