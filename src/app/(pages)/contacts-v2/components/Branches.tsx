import { Container, Row, Col } from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const Branches = () => {
  return (
    <section className="py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
      <Container>
        <Row className="py-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
              <iframe
                className="d-block h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.535854634705!2d77.410372!3d28.5009738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce974eb7401e1:0x586d962637bc9c37!2sInfrabyte%20Technology!5e0!3m2!1sen!2sin!4v1705060000000"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Infrabyte Technology Location"
              ></iframe>
            </div>
          </Col>

          <Col lg={{ span: 5, offset: 1 }}>
            <h1 className='h2 mb-4'>Our Differnt Locations</h1>
            <h2 className="h4 mb-4">Location 1</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:map"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                Reg Add: Plot No 42, Khasra No 14/14, <br/>
                Street 2, Nathu Colony, Delhi 110084
              </li>
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:phone-call"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                +91 73036 11145
              </li>
              <li className="d-flex">
                <IconifyIcon
                  icon="bx:time-five"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                <div>
                  <strong className="text-nav">Mon - Fri</strong>: 09:30 AM - 06:30 PM
                </div>
              </li>
            </ul>

            <h2 className="h4 mb-4">Location 2</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:map"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                8 Square Zen, Plot No.-9, Sector 142 <br/>
                Noida, Uttar Pradesh 201305
              </li>
              <li className="d-flex pb-1 mb-2">
                <IconifyIcon
                  icon="bx:phone-call"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                +44 74071 31797
              </li>
              <li className="d-flex">
                <IconifyIcon
                  icon="bx:time-five"
                  className="text-primary fs-xl me-2"
                  style={{ marginTop: '.125rem' }}
                />
                <div>
                  <strong className="text-nav">Mon - Fri</strong>: 09:30 AM - 06:30 PM
                </div>
              </li>
            </ul>

            <div className="d-flex pt-1 pt-md-3 pt-xl-4">
              <Link to="#" className="btn btn-icon btn-secondary me-3" aria-label="Facebook">
                <IconifyIcon icon="bxl:facebook" fontSize={20} />
              </Link>
              <Link to="#" className="btn btn-icon btn-secondary me-3" aria-label="Instagram">
                <IconifyIcon icon="bxl:instagram" fontSize={20} />
              </Link>
              <Link to="#" className="btn btn-icon btn-secondary me-3" aria-label="Twitter">
                <IconifyIcon icon="bxl:twitter" fontSize={20} />
              </Link>
              <Link to="#" className="btn btn-icon btn-secondary" aria-label="YouTube">
                <IconifyIcon icon="bxl:youtube" fontSize={20} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Branches;
