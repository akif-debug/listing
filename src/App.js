import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Data from './Data';
import { Button } from 'react-bootstrap'; 
import { Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <>
    <Container fluid className='container'>
      <Row>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[0].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[1].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[2].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[3].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[4].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[5].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[6].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>

        <Col className='column' lg={3} md={6} >
          <div className='box'>
          <Demo img={Data[7].img} place={Data[0].place} disc={Data[0].disc} price={Data[0].price} inr={Data[0].inr} btnL={Data[0].btnL} btnR={Data[0].btnR}/>
          </div>
        </Col>


      </Row>
    </Container>
    </>
  );
}

export default App;