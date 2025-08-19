import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return  (
        <div className="error">
        <div className="error-content">   
        <p>Oops!! Something went wrong!!</p>
        <p>{err.status}, {err.statusText}</p>
        <p>{err.data}</p>
        </div>
        </div>
    );
}

export default Error;