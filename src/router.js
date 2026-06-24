import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const ProjectsMore = lazy(() => import('./pages/ProjectsPage/ProjectsMore/ProjectsMore'));
const ProjectDetails = lazy(() => import('./pages/ProjectsPage/ProjectDetails/ProjectDetails'));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/projects",
                element: <ProjectsPage/>,
                children: [
                    {
                        index: true,
                        element: <ProjectsMore/>
                    },
                    {
                        path: ":title",
                        element: <ProjectDetails/>,
                    },
                ],
            },
        ],
    },
]);
