import 'bootstrap/dist/css/bootstrap.css';
import Loading from '../Loading';
import Nav from '../Nav';
import Footer from '../Footer';
import { useAuth0 } from '@auth0/auth0-react'
import '../../index.css';

function Recharge() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />

    return (
      <div>
       <Nav />
      <div class='main container'>
        <div class="card">
          <h5 class="card-header">Analyseur d'investissement suivant les critères d'ESG</h5>
          <div class="card-body">
            <h5 class="card-title">Veuillez décrire votre investissement</h5>
            <div class="form-floating card-text">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <label for="floatingTextarea2">Description</label>
            </div>
            <div>
               <a href="#" class="btn btn-primary">Analyser</a>
            </div>
          </div>
        </div>
      </div>
      <div class='main container'>
       <div class="card text-center">
       <div class="row">
         <div class='col col-4'>
        
                <h5 class="card-title">Analyse de sentiment</h5>
                <p class="card-text">
                <ul class="list-group">
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                </ul>
                </p>
     
         </div>
         <div class='col col-4'>
   
                <h5 class="card-title">ESG analyseur</h5>
                <p class="card-text">
                <ul class="list-group">
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
                </p>
          
         </div>
         <div class='col col-4'>
      
                <h5 class="card-title">DSéclaration prospective</h5>
                <p class="card-text">
                <ul class="list-group">
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                </ul>
                </p>
 
         </div>
         </div>
        </div>
      </div>
       <Footer />
      </div>
    );
  }
  
  export default Recharge;
  