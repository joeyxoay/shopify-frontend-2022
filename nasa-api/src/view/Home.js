import logo from '../logo.svg';
import '../App.css';
import { SearchBar } from '../components/SearchBar';
import { paths } from '../utils/constants';
export function Home() {
    const redirectToBrowse = (input) => {
        window.location.href = paths.BROWSE + "?search=" + input
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <SearchBar
                        redirect = {redirectToBrowse}
                    />
                </header>
            </div>
        </>
    );
}