import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    setError(null);
    setSuccessMessage(null);

    if (!token) {
      setError("Please sign up to generate a token before authenticating.");
      return;
    }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setSuccessMessage(result.message);
    } catch (error) {
      if (error.message === "jwt malformed") {
        setError("Oops! That token is invalid. Please sign up to get a new one.");
      } else {
        setError(error.message);
      }
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}