import 'bootstrap/dist/css/bootstrap.css';
import Loading from '../Loading';
import Nav from '../Nav';
import Footer from '../Footer';
import { useAuth0 } from '@auth0/auth0-react'

function Learning() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />

    return (
      <div>
       <Nav />
      <div class="container main">
        <div class='row'>
          <div class='col col-6'>
            <h1>Nous travaillons avec les meuilleurs partenaires</h1>
            <p>Bien que nous soyons devoués à vous offrir les meuilleurs des services. Nous travaillons avec un certains nombre de partenaires
              qui nous aident au quotidien à atteindre nos objectifs.
            </p>
          </div>
        </div>
        <div  class='row'>
          <ul class="list-group list-group-horizontal">
              <li class="list-group-item">
               <img src={require('../../image/bourse_de_casablanca.jpeg')} alt="" class="image" />
              </li>
              <li class="list-group-item">
                 <img src={require('../../image/ministere.png')} alt="" class="image" />
              </li>
              <li class="list-group-item">
                 <img src={require('../../image/fmef.jpg')} alt="" class="image" />
              </li>
              <li class="list-group-item">
                 <img src={require('../../image/Logo_Bank_Al-Maghrib.png')} alt="" class="image" />
              </li>
          </ul>
          <ul class="list-group list-group-horizontal">
              <li class="list-group-item">
               <img src={require('../../image/ecole_de_la_bourse.jpg')} alt="" class="image" />
              </li>
              <li class="list-group-item">
                 <img src={require('../../image/ammc.png')} alt="" class="image" />
              </li>
              <li class="list-group-item">
                 <img src={require('../../image/ensias.png')} alt="" class="image" />
              </li>
          </ul>
           
          </div>
      </div>
       <Footer />
      </div>
    );
  }
  
  export default Learning;
  