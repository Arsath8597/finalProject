import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
     <AppHeader/>
     <SideMenu/>
     <PageContent/>
     <AppFooter/>
    </div>
  );
}
export default App;
