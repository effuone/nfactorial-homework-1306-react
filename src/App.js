import SingleImage from "./components/SingleImage";
import './App.css'
import img1 from './images/1.jpeg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'
import img5 from './images/5.jpeg'

const App = () => {
  return (
    <div className="container">
      <SingleImage img={img1} title="Hi"/>
      <SingleImage img={img2} title="Hi"/>
      <SingleImage img={img3} title="Hi"/>
      <SingleImage img={img4} title="Hi"/>
      <SingleImage img={img5} title="Hi"/>
    </div>
  );
}

export default App;