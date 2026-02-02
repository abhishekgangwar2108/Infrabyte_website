import author from '/images/contact-bg.jpg';
import { Col, Row } from 'react-bootstrap';

const WorkingwithInfrabyte = () => {
  return (
    <section className="container py-lg-4 py-xl-5 mt-3 mb-5">
      <Row className="g-0 rounded-0 overflow-hidden">

        {/* LEFT IMAGE */}
        <Col
          md={5}
          className="bg-size-cover bg-position-center"
          style={{
            backgroundImage: `url(${author})`,
            minHeight: '520px',
          }}
        />

        {/* RIGHT CONTENT */}
        <Col
          md={7}
          className="text-light px-4 px-lg-5 py-5"
          style={{ backgroundColor: '#1E6BFF' }}
        >
          <div className="mx-auto" style={{ maxWidth: '560px' }}>

            <h2 className="h1 mb-4 text-light">Working With Infrabyte</h2>

            <p className="opacity-75 mb-5">
              We partner with organizations that value clarity, accountability,
              and long-term thinking. <br/>
              Our teams work closely with stakeholders
              to design, build, and operate digital systems that continue to
              perform as business needs evolve.
            </p>

            {/* FEATURES */}
            <Row className="gy-4">
              <Col md={4}>
                <h6 className="fw-semibold mb-2 text-light">Long-term Partnerships</h6>
                <p className="opacity-75 small mb-0">
                  We engage with a long-term view, not transactional delivery.
                </p>
              </Col>

              <Col md={4}>
                <h6 className="fw-semibold mb-2 text-light">Enterprise-Ready Thinking</h6>
                <p className="opacity-75 small mb-0">
                  Designed for complexity, governance, and scale from day one.
                </p>
              </Col>

              <Col md={4}>
                <h6 className="fw-semibold mb-2 text-light">Outcome-Driven Execution</h6>
                <p className="opacity-75 small mb-0">
                  Focused on systems that perform in real operating environments.
                </p>
              </Col>
            </Row>

          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WorkingwithInfrabyte;
