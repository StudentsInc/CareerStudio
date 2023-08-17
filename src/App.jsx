import {
  Routes,
  Route
} from "react-router-dom";
import InterestsAssessmentIntro from "./pages/InterestsAssessmentIntro";

function App() {

  return (
    <Routes>
      <Route path="/" element={<InterestsAssessmentIntro />} />
    </Routes>
  );
}
export default App;
