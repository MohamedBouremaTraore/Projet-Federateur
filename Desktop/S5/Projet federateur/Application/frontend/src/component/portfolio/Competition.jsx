import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';
import Loading from '../Loading';
import Nav from '../Nav';
import Footer from '../Footer';
import { useAuth0 } from '@auth0/auth0-react'

function Competition() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />

    return (
      <div>
       <Nav />
      <div className='main'>
        Competition
      </div>
       <Footer />
      </div>
    );
  }
  
  export default Competition;
  