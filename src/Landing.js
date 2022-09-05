import logo from "./img/redlogo.png";
import logo2 from "./img/manlogo.png";
import Button from "./Button";
import {Link} from 'react-router-dom'
export default function Landing() {
  return (
    <main className="landing--main">
      <img src={logo} className="logo" alt="" />
      <img src={logo2} className="logo2" alt="" />
      <div className="buttons">
        <Link to="/addnote"> <Button name="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ" /></Link>
        <Link to="/listnote"> <Button name="ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ" /></Link>
       
      </div>
    </main>
  );
}