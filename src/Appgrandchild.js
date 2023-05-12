import { useContext } from "react"
import { ColorContext } from "./App"

function Appgrandchild() {
    const handleColor = useContext(ColorContext)
    return (

        <button onClick={() => { handleColor() }}> click to change color</button >

    )
}
export default Appgrandchild