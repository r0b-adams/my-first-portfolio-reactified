import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";

import "./reset.css";
import "./style.css";

// fixed deploy error:
// git remote set-url origin https://github.com/USERNAME/REPOSITORY_NAME.git

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;