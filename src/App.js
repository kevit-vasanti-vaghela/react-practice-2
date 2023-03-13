import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CandidateDetails from "./pages/CandidateDetails";
import EachQuestion from "./pages/EachQuestion";
import QuestionList from "./pages/QuestionList";
import Report from "./pages/Report";
function App() {
  const router = createBrowserRouter([
    {path:'/', element: <CandidateDetails />},
    {path:'questions', element: <QuestionList />},
    {path:'questions/:questionId', element: <EachQuestion />},
    {path:'report', element: <Report />},
  ])
  return (
    <div>
      <h1>MCQ Test</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
