import houseBlendLogo from '../assets/houseBlendLogo.png';
const Header = () => {
return (
    <header className="bg-sealBrown-100 text-white shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-24">
    <a href="" className="flex items-center justify-center">
      <img className="h-16" src={houseBlendLogo} alt="" />
      <span className="ml-4 uppercase font-black text-almond">House<br/>Blend</span>
    </a>
    <nav className="contents font-semibold text-almond lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active">
          <a href="">
            <span>Home</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>About</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>Projects</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>Services</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>Blog</span>
          </a>
        </li>
      </ul>
    </nav>
    <button className="border border-white rounded-full font-bold text-almond px-8 py-2">Contact Us</button>
  </div>
</header>
)
}

export default Header