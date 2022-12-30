
//===COMPONENTS===//
import Header from './components/header/header'
import Main from './components/body/Body'
import Footer from './components/footer/Footer'

//===STYLES===//
import './assets/styles/body_style/index_style.css'
import './assets/styles/normalyze.css'



function App() {
  return (
    <div className="App">

      <body className='index__body'>

        <Header/>
        <Main/>

        <div id='aboutMe__'></div>
        <div id='skills__'></div>
        <div id='projects__'></div>
        <div id='contact__'></div>

        <Footer/>

      </body>

    </div>
  );
}

export default App;
