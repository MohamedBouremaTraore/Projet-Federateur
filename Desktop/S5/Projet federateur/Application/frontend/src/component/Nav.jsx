import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Chatbox from './Chatbox'

function Nav() {
    return (
  <div class="container">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
    <a class="navbar-brand logo" href="/">
       <img src="https://img2.freepng.fr/20180320/vyw/kisspng-computer-icons-stock-market-finance-iconfinder-analysis-icon-free-5ab0c2b0105679.4789140315215336160669.jpg" alt="logo" className="logo"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {/*}  <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Competition">Competition</a>
    </li>*/}
        <li class="nav-item">
          <a class="nav-link" href="/Recharge">ESG analyseur</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#partenaires">Partenaires</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Jeux
          </a>
          <ul class="dropdown-menu profile">
            <li><a class="modify-profile" href="/Trading">Apprendre à trader</a></li>
            <li><a class='modify-profile border-top' href="/ESG">Quiz sur ESG</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2 form-sm" type="search" placeholder="Ecrire ..." aria-label="Search"/>
        <button class="btn btn-outline-success btn-sm" type="submit">Rechercher</button>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item p-2">
      <LoginButton />
          </li>
          <li class="nav-item p-2">
          <LogoutButton />
          </li>
          <li class="nav-item">
          <Profile />
          </li>
      </ul>
    </div>
       </div>
    </nav>
    <div>
          <Chatbox/>
    </div>
  </div>
    );
  }
  
  export default Nav;
  