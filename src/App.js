
import LandingPage from "./components/LandingPage/LandingPage";
import GamingPage from "./components/GamingPage/GamingPage";
import ModulePage from "./components/ModulePage/ModulePage";
import PlatformPage from "./components/PlatformPage/PlatformPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";

import PeoplePage from "./components/PeoplePage/PeoplePage";
import GetStartedPage from "./components/GetStartedPage/GetStartedPage";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div>
            <LandingPage/>
            <GamingPage/>
            <ModulePage/>
            <PlatformPage/>
            <ServicesPage/>
            <PeoplePage/>
            <GetStartedPage/>
            <Footer/>
        </div>
    );
}

export default App;
