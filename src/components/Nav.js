import nav from '../assets/nav.png';

const Nav = () => {
  return (
    <nav style={{ height: '95px' }}>
        <img 
          style={{ width: '100%'}} 
          src={nav} 
          alt="Navbar" />
    </nav>
  );
};

export default Nav;
