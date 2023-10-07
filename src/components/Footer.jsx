import { BsMusicPlayer } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="max-w-7xl mt-20 mx-auto">
      <hr />
      <footer className="footer max-w-7xl mt-20 mx-auto p-3  text-[#CB0C9F] ">
        <aside>
          <BsMusicPlayer className="text-6xl"></BsMusicPlayer>
          <p className="text-xl font-bold">
            Entertainment Fiesta
            <br />
          </p>
          <p>Providing you Entertainment since 1992</p>
        </aside>
        <nav className="">
          <header className="footer-title text-xl">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-xl">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-xl">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
