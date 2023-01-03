import 'bootstrap/dist/css/bootstrap.css';
import Loading from '../Loading';
import Nav from '../Nav';
import Footer from '../Footer';
import { useAuth0 } from '@auth0/auth0-react'

function Divers() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />

    return (
      <div>
       <Nav />
      <div>
      Divers
      </div>
       <Footer />
      </div>
    );
  }
  
  export default Divers;
  