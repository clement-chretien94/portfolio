import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectsMore from './pages/ProjectsPage/ProjectsMore/ProjectsMore';
import ProjectDetails from './pages/ProjectsPage/ProjectDetails/ProjectDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';

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