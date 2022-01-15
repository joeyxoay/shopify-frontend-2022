import logo from '../logo.svg';
import '../App.css';
import { SearchBar } from '../components/SearchBar';
import { paths } from '../utils/constants';
import AnimatedCursor from "react-animated-cursor"

export function Home() {
    const redirectToBrowse = (input) => {
        window.location.href = paths.BROWSE + "?search=" + input
    }

    return (
        <>
            <div className="App">
                <AnimatedCursor
                    innerSize={8}
                    outerSize={8}
                    color='255, 255, 255'
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}
                />
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