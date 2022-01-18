import '../style/Home.css';
import { SearchBar } from '../components/SearchBar';
import { paths } from '../utils/constants';
import { TrailingCursor } from '../components/TrailingCursor';
import { BackgroundParticles } from '../components/BackgroundParticles';
import Typist from 'react-typist';

export function Home() {
    const redirectToBrowse = (input) => {
        window.location.href = paths.BROWSE + "?search=" + input
    }

    return (
        <div className="App">
            <TrailingCursor/>
            <BackgroundParticles/>
            <header className="App-header">
                <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png" className="App-logo" alt="logo" />
                <Typist startDelay={5}>Welcome! Search below for some awesome NASA pictures :)</Typist>
                <div className="SearchDiv">
                    <SearchBar
                        redirect = {redirectToBrowse}
                    />
                </div>
            </header>
        </div>
    );
}