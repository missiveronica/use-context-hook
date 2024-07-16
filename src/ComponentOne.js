import { useContext } from "react";
import { Context } from "./Context";

function ComponentOne () {
    const [context, setContext] = useContext( Context );
    return (
        <div>
            <p>Component One</p>
            <button onClick={() => setContext("New State")}>Press here to change name</button>
        </div>
    )
}
export default ComponentOne;