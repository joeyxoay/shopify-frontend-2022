import logo from '../logo.svg';
import '../style/Home.css';
import { SearchBar } from '../components/SearchBar';
import { paths } from '../utils/constants';
import { TrailingCursor } from '../components/TrailingCursor';
import { BackgroundParticles } from '../components/BackgroundParticles';

export function Home() {
    const redirectToBrowse = (input) => {
        window.location.href = paths.BROWSE + "?search=" + input
    }

    return (
        <>
            <div className="App">
                <TrailingCursor/>
                <BackgroundParticles/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Welcome! Search below for some awesome NASA pictures :)</p>
                    <SearchBar
                        redirect = {redirectToBrowse}
                    />
                </header>
            </div>
        </>
    );
}