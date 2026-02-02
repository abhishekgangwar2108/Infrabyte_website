import { Container, Card, Form, Button } from "react-bootstrap";
import ArrowIcon from "../../../../components/ArrowIcon";

const Contact = () => {
  return (
    <section
      className="position-relative w-100 overflow-hidden"
      style={{ minHeight: "620px" }}
    >
      
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      >
        <source src="/business-strategy-02.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* DARK OVERLAY */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10" />

      <Container className="position-relative py-5">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6 text-white">
            <h2 className="fw-light display-6 mb-4 text-light">
              Let us help you create a<br />
              lasting new image for<br />
              your brand
            </h2>

            <Button
              variant="light"
              className="rounded-pill px-4 fw-medium bg-transparent text-light gap-2 d-inline-flex align-items-center"
            >
              View More 
              <ArrowIcon />
            </Button>
          </div>

          {/* RIGHT FORM */}
          <div className="col-12 col-lg-5">
            <Card
              className="border-0 rounded-0"
              style={{
                background: "rgba(150, 150, 150, 0.75)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <Card.Body className="p-4 p-lg-5 text-white">
                <h5 className="text-center text-light mb-4 fw-medium">
                  Connect With Us
                </h5>

                <Form>
                  <div className="row mb-5">
                    <div className="col-12 col-md">
                      <Form.Control
                        placeholder="First Name"
                        className="bg-transparent border-0 border-bottom rounded-0 text-white"
                      />
                    </div>
                    <div className="col-12 col-md">
                      <Form.Control
                        placeholder="Last Name"
                        className="bg-transparent border-0 border-bottom rounded-0 text-white"
                      />
                    </div>
                  </div>

                  <Form.Control
                    placeholder="E-mail address"
                    className="mb-5 bg-transparent border-0 border-bottom rounded-0 text-white"
                  />

                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Message"
                    className="mb-4 bg-transparent border rounded-0 text-white"
                  />

                  <Button
                    variant="dark"
                    className="rounded-pill px-4 gap-2 d-inline-flex align-items-center"
                  >
                    Send 
                    <ArrowIcon />
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
