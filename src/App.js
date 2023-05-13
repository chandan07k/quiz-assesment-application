import React, { useState } from "react";
import Home from "./Components/Home";
import Instructions from "./Components/Instructions";
import Quiz from "./Components/Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [name, setName] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setName={setName} name={name} />,
    },
    {
      path: "/quiz",
      element: <Quiz startTimer={startTimer} setName={setName} />,
    },
    {
      path: "/instructions",
      element: <Instructions setStartTimer={setStartTimer} name={name} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
