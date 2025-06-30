import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import TablePage from "./pages/TablePage";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import ChartsPage from "./pages/ChartsPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/users"
          element={
            <DashboardLayout>
              <TablePage />
            </DashboardLayout>
          }
        />
        <Route
          path="/calendar"
          element={
          <DashboardLayout>
            <CalendarPage />
          </DashboardLayout>
          }
        />
        <Route
          path="/kanban"
          element={
          <DashboardLayout>
            <KanbanPage />
          </DashboardLayout>
          }
        />
        <Route
          path="/charts"
          element={
          <DashboardLayout>
            <ChartsPage />
          </DashboardLayout>
          }
        />
        <Route
          path="*"
          element={
          <DashboardLayout>
            <NotFoundPage />
          </DashboardLayout>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
