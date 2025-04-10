import React from "react";

function Auth ({token}){
    const [auth, setAuth] = useState()

    async function handleClick(){
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            const result = await response.json()
            setAuth(result.data)
        } catch(error){
            console.log("Error")
        }
    }

    return (
        <>
            <h2>Authenticate!</h2>
            <button onClick={handleClick}>Authenticate Token</button>
            
        </>
    )

}

export default Auth