import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="px-6 py-3 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
