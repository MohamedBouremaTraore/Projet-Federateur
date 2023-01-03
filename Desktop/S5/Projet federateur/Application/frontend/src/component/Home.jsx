import 'bootstrap/dist/css/bootstrap.css';
import Loading from './Loading';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import { useAuth0 } from '@auth0/auth0-react'

function Connect() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />

    return (
      <div className='App'>
       <Nav />
       <Main />
       <Footer />
      </div>
    );
  }
  
  export default Connect;
  