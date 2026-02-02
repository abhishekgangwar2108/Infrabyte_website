import { Container, Button } from "react-bootstrap";
import ArrowIcon from "@/components/ArrowIcon";
import CountUp from "@/components/CountUp";

const BuiltTechno = () => {
  return (
    <>
      {/* ✅ TOP STRIP */}
      <div className="bg-white border-bottom py-3">
        <Container fluid className="px-4 px-lg-5 p-4">
          <h2 className="fw-bold text-dark mb-0 ps-5">
            Technology built for the real world.
          </h2>
        </Container>
      </div>

      {/* ✅ VIDEO SECTION */}
      <section
        className="position-relative bg-dark overflow-hidden"
        data-bs-theme="dark"
      >
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        >
          <source src="/business-strategy-01.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></span>

        {/* CONTENT */}
        <div className="position-relative zindex-5 min-vh-100 d-flex align-items-center">
          <Container fluid className="px-4 px-lg-5">
            {/* COUNTER */}
            <div className="position-absolute top-0 start-0 p-4 p-lg-5">
              <h1 className="display-1 fw-semibold text-white opacity-40 mb-0">
                <CountUp end={850} suffix="K+" duration={2000} />
              </h1>

              <h2 className="fw-light text-white opacity-80">
                Successful projects <br />
                delivered
              </h2>

              <Button
                variant="light"
                className="rounded-pill px-4 fw-medium bg-transparent text-light gap-2 d-inline-flex align-items-center"
              >
                View More
                <ArrowIcon />
              </Button>
            </div>

            {/* TEXT */}
            <div className="position-absolute bottom-0 end-0 p-4 p-lg-5 text-end">
              <h6 className="text-white fw-semibold mb-1">
                Digital Marketing
              </h6>
              <p className="text-white opacity-75 small mb-0">
                Liberi meas dictas immod scriptent,
                <br />
                risqué vivendum eu usu.
              </p>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default BuiltTechno;
