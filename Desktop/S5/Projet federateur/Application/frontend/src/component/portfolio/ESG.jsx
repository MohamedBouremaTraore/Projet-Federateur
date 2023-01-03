import 'bootstrap/dist/css/bootstrap.css';
import Loading from '../Loading';
import "./quiz/index.css";
import Quiz from "./quiz/components/Quiz";
import { QuizProvider } from "./quiz/contexts/quiz";
import Nav from '../Nav';
import Footer from '../Footer';
import { useAuth0 } from '@auth0/auth0-react'

function ESG() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />

    return (
      <div>
       <Nav />
      <div>
      <div>
      <QuizProvider>
      <Quiz />
      </QuizProvider>
      </div>
      </div>
       <Footer />
      </div>
    );
  }
  
  export default ESG;
  