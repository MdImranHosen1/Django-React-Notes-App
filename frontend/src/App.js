import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'

function App() {
    return (
        <>
            <div className='App'>
                <Header></Header>
                <NoteListPage></NoteListPage>
            </div>
        </>
    );
}

export default App;
