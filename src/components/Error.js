import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <div>
                <h1>Oops!</h1>
                <h3>{err?.error?.message}</h3>
                <h3>{err?.status} : {err?.statusText}</h3>
                <p>The Url you are searching is unavailable.</p>
                <p>Please go back to home page!</p>
            </div>
        </>
    )
}

export default Error;