import "./App.css";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NotePage } from "./pages/NotePage";


function App() {
    return (
        <HashRouter>
            <div className="container dark">
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<NoteListPage />}>
                        </Route>
                        <Route path="/note/:id" element={<NotePage />}>
                        </Route>
                    </Routes>

                </div>
            </div>
        </HashRouter>
    );
}

export default App;

