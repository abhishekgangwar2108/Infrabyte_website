import webby from '@/assets/img/landing/digital-agency/awards/webby.svg';
import cssda from '@/assets/img/landing/digital-agency/awards/cssda.svg';
import awwards from '@/assets/img/landing/digital-agency/awards/awwwards.svg';
import fwa from '@/assets/img/landing/digital-agency/awards/fwa.svg';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import ArrowIcon from '../../../../components/ArrowIcon';

const Awards = () => {
  return (
    <section className="container mb-5 pb-2 pb-md-4 pb-lg-5">
      <Row className="gy-4 py-xl-2">
        <Col md={4}>
          <h2 className="mb-4 ms-4 text-md-start text-center">Connecting businesses and ideas for the future</h2>
          <Button variant="dark" className="rounded-pill px-4 ms-4 gap-2">
              View More 
            <ArrowIcon />
          </Button>
        </Col>
        <Col lg={7} md={8} className="offset-lg-1">
          <Row className="row-cols-sm-4 row-cols-2 gy-4">
            <Col>
              <div className="position-relative text-center">
                <img src={webby} width="150" alt="Webby" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  4x mobile of the day
                </Link>
              </div>
            </Col>
            <Col>
              <div className="position-relative text-center">
                <img src={cssda} width="150" alt="CSSDA" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  1x Kudos
                </Link>
              </div>
            </Col>
            <Col>
              <div className="position-relative text-center">
                <img src={awwards} width="150" alt="Awwwards" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  3x website of the day
                </Link>
              </div>
            </Col>
            <Col>
              <div className="position-relative text-center">
                <img src={fwa} width="150" alt="FWA" className="d-block mx-auto mb-3" />
                <Link
                  to="#"
                  className="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                >
                  2x best website
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Awards;
