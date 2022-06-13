import SingleImage from "./components/SingleImage";
import './App.css'
import Header from "./components/common/header/Header";
import img1 from './images/1.jpeg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'
import img5 from './images/5.jpeg'
const App = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <SingleImage img={img1} title="Hey"/>
      <SingleImage img={img2} title="Let's"/>
      <SingleImage img={img3} title="Give"/>
      <SingleImage img={img4} title="All"/>
      <SingleImage img={img5} title="You can"/>
    </div>
    </>
  );
}

export default App;