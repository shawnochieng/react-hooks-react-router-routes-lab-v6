import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function Errorpage(){
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>
                    Sorry. Something went wrong!
                </h1>
            </main>
        </>
    )
}

export default Errorpage;