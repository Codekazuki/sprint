import aworan from "./assets/rccg.png";
import "./index.css";

const Sprint = () => {
  return (
    <div>
      <div className='nav-scri'>
        <img src={aworan} alt='' height='24rem' width='24rem' />
        <ul className='nav-list-scri'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <h1>Fun fact about React</h1>

      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};
export default Sprint;
