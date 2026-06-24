import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      <ScrollRestoration/>
    </>
  )
}

export default App;
