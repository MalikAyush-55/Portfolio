import  styled, {ThemeProvider} from "styled-components"
import  {darkTheme} from "./utils/Themes.js"
import Navbar from './components/navbar';
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero.js";
import Skills from "./components/sections/skills"
import Projects from "./components/sections/projects.js";
import Footer from "./components/sections/footer.js";


const Body = styled.div`
background-color: ${({theme}) => theme.bg};
width: 100%;
height:90vh;
overflow-x:hidden;
position:relative;
`
function App() {
  return <ThemeProvider theme={darkTheme}>
   <BrowserRouter>
   <Navbar/>
   <Body>
    <Hero/>
    <Skills/>
    <Projects/>
    <Footer/>
   </Body>
   </BrowserRouter>
  </ThemeProvider>
}

export default App;
