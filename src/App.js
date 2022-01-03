import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import useAuthListener from "./hooks/useAuthListener";

const App = observer(() => {
  const user = useAuthListener();
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <main className="main">
          <AppRouter user={user} />
        </main>
      </div>
    </BrowserRouter>
  );
});

export default App;
