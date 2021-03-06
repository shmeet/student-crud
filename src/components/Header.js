import "./css/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div class="header-wrapper">
          <a href="#" class="brand">
            Student App
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
