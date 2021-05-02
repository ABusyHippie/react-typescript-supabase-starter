import {Container} from 'react-bootstrap';
import {useCradle} from '@jishida/react-awilix';
import {useEffect} from 'react';


 export default function () {
  const {loggerService} = useCradle();

  useEffect(()=>{
    loggerService.logWithColor("This is a sample message from the LoggerService using the DI container", "blue");
  }, [])
  return (
    <Container>
      <h1>Welcome</h1>

      <div className="content">
        <p> Enjoy this React TypeScript Supabase Starter!</p>
      </div>
    </Container>
  );
}
