import React from "react";
import { useQuery } from "react-query";
import getWelcome from "./api/getWelcome"


function App() {

    const { isLoading, isError, error, data } = useQuery({
        queryKey: "welcome",
        queryFn: getWelcome
    })

    if (isLoading) {
        return <div>loading...</div>
    }

    if (isError) {
        return <div>Error, {error.message}</div>
    }

    const greeting = <p>{data.greeting}</p>

    return (
        <div>
            <p>first steps</p>
            {greeting}
        </div>
    )
}

export default App
