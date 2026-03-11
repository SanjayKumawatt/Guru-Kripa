import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import FindHome from './Pages/FindHome'
import ListProperty from './Pages/ListProperty'
import WhoItServes from './Pages/WhoItServes'
import OurStory from './Pages/OurStory'
import MatchingEngine from './Pages/How'
import Connect from './Pages/Connect'
import UsageTerms from './Pages/UsageTerms'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/find-home",
          element: <FindHome />
        },
        {
          path: "/list-property",
          element: <ListProperty />
        },
        {
          path: "/who-it-serves",
          element: <WhoItServes />
        },
        {
          path: "/our-story",
          element: <OurStory />
        },
        {
          path: "/how-matching-works",
          element: <MatchingEngine />
        },
        {
          path: "/connect",
          element: <Connect />
        },

      ]
    },
    {
      path: "/usage-terms",
      element: <UsageTerms />
    },
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App