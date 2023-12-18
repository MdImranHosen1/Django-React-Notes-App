import "./App.css";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotePage } from "./pages/NotePage";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<NoteListPage />}>
                </Route>
                <Route path="/note/:id"  element={<NotePage />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

