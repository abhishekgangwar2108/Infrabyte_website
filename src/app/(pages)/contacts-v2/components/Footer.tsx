import logo from '@/assets/img/infra_Logo2.png';
import { useState } from 'react';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import IconifyIcon from '@/components/IconifyIcon';

type Brand = {
  name: string;
  logo: string;
};

type LinkItem = {
  title: string;
  url: string;
  icon?: string;
};

type Copyright = {
  text: string;
  by: string;
  url: string;
};

type FooterData = {
  description: string;
  email: string;
  brand: Brand;
  links: LinkItem[];
  policies: LinkItem[];
  socials: LinkItem[];
  copyright: Copyright;
};

const footerData: FooterData = {
  description:
    'At Infrabyte Technology, we revolutionise how businesses connect with their customers. We combine innovation, expertise, AI and Salesforce technology to empower your business like never before. Our tailored solutions harness the power of data and unite data-driven insights and AI capabilities to deliver personalised experiences at every touchpoint.',
  email: 'info@infrabyteits.com',

  brand: {
    name: 'Infrabyte',
    logo: logo,
  },

  links: [
    { title: 'Home', url: '#', icon: 'bx:home' },
    { title: 'Features', url: '#', icon: 'bx:star' },
    { title: 'Integrations', url: '#', icon: 'bx:plug' },
    { title: 'Our Clients', url: '#', icon: 'bx:group' },
    { title: 'Blog', url: '#', icon: 'bx:news' },
  ],

  policies: [
    { title: 'Terms & Conditions', url: '#', icon: 'bx:file' },
    { title: 'Privacy Policy', url: '#', icon: 'bx:lock' },
  ],

  socials: [
    { title: 'Facebook', url: '#', icon: 'bx:bxl-facebook' },
    { title: 'LinkedIn', url: '#', icon: 'bx:bxl-linkedin' },
    { title: 'Twitter', url: '#', icon: 'bx:bxl-twitter' },
    { title: 'Instagram', url: '#', icon: 'bx:bxl-instagram' },
  ],

  copyright: {
    text: 'All rights reserved. Made by',
    by: 'Infrabyte',
    url: 'https://infrabyteits.com/',
  },
};

const Footer = () => {
  const [openUseful, setOpenUseful] = useState(false);
  const [openSocials, setOpenSocials] = useState(false);

  return (
    <footer className="footer border-top border-light pt-5 pb-4 pb-lg-5">
      <Container className="pt-lg-4">
        <Row className="pb-5">
          {/* LEFT SECTION */}
          <Col lg={4} md={6}>
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4 d-flex align-items-center gap-2">
              <img src={footerData.brand.logo} width="47" alt={footerData.brand.name} />
              {footerData.brand.name}
            </div>

            <p className="fs-sm pb-lg-3 mb-4">{footerData.description}</p>

            {/* NEWSLETTER */}
            <form className="needs-validation" noValidate>
              <label htmlFor="subscr-email" className="form-label">
                Subscribe to our newsletter
              </label>
              <div className="input-group position-relative">
                <IconifyIcon
                  icon="bx:envelope"
                  className="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                />
                <input
                  type="email"
                  id="subscr-email"
                  className="form-control rounded-start ps-5"
                  placeholder="Your email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>

          {/* RIGHT SECTION */}
          <Col xl={6} lg={7} md={5} className="offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <Row id="footer-links">
              {/* USEFUL LINKS */}
              <Col lg={4}>
                <h6 className="mb-2">
                  <Link
                    to="#useful-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    onClick={() => setOpenUseful(!openUseful)}
                  >
                    Useful Links
                    <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                  </Link>
                </h6>

                <Collapse in={openUseful}>
                  <div id="useful-links" className="d-lg-block">
                    <ul className="nav flex-column pb-lg-1 mb-lg-3">
                      {footerData.links.map((link, i) => (
                        <li key={i} className="nav-item">
                          <Link
                            to={link.url}
                            className="nav-link d-flex align-items-center gap-2 px-0 pt-1 pb-2"
                          >
                            {link.icon && (
                              <IconifyIcon icon={link.icon} className="fs-sm text-muted" />
                            )}
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <ul className="nav flex-column mb-2 mb-lg-0">
                      {footerData.policies.map((policy, i) => (
                        <li key={i} className="nav-item">
                          <Link
                            to={policy.url}
                            className="nav-link d-flex align-items-center gap-2 px-0 pt-1 pb-2"
                          >
                            {policy.icon && (
                              <IconifyIcon icon={policy.icon} className="fs-sm text-muted" />
                            )}
                            {policy.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Collapse>
              </Col>

              {/* SOCIAL LINKS */}
              <Col xl={4} lg={3}>
                <h6 className="mb-2">
                  <Link
                    to="#social-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    onClick={() => setOpenSocials(!openSocials)}
                  >
                    Socials
                    <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                  </Link>
                </h6>

                <Collapse in={openSocials}>
                  <div id="social-links" className="d-lg-block">
                    <ul className="nav flex-column mb-2 mb-lg-0">
                      {footerData.socials.map((social, i) => (
                        <li key={i} className="nav-item">
                          <Link
                            to={social.url}
                            className="nav-link d-flex align-items-center gap-2 px-0 pt-1 pb-2"
                          >
                            {social.icon && (
                              <IconifyIcon icon={social.icon} className="fs-lg text-muted" />
                            )}
                            {social.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Collapse>
              </Col>

              {/* CONTACT */}
              <Col xl={4} lg={5} className="pt-2 pt-lg-0">
                <h6 className="mb-2">Contact Us</h6>
                <Link to={`mailto:${footerData.email}`} className="fw-medium d-flex align-items-center gap-2">
                  <IconifyIcon icon="bx:envelope" />
                  {footerData.email}
                </Link>
                
                <Link
                to="tel:+917303611145"
                className="fw-medium d-flex align-items-center gap-2 text-decoration-none">
                <IconifyIcon icon="bx:phone-call" />
                  +91 73036 11145
                </Link>

                <Link
                to="tel:+917303611145"
                className="fw-medium d-flex align-items-center gap-2 text-decoration-none">
                <IconifyIcon icon="bx:phone-call" />
                  +44 74071 31797
                </Link>
                
                {/*Locations*/}
                <h6 className="mb-2 mt-4">Locations</h6>
                <ul className='list-unstyled d-flex flex-column gap-2 mb-0'>
                    <li className="d-flex align-items-start gap-2">
                    <IconifyIcon icon="bx:map" className="fs-5 text-muted mt-1" />
                    <span className="fs-sm">
                    Reg Add: Plot No 42, Khasra No 14/14, Street 2, Nathu Colony, Delhi 110084
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <IconifyIcon icon="bx:map" className="fs-5 text-muted mt-1" />
                    <span className="fs-sm">
                    8 Square Zen, Plot No.-9, Sector 142 Noida, Uttar Pradesh 201305
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <IconifyIcon icon="bx:map" className="fs-5 text-muted mt-1" />
                    <span className="fs-sm">
                    Skyline Icon Marol 3 404, 4th Floor, Skyline Icon, Andheri - Kurla Rd, Andheri East, Mumbai 400059
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* COPYRIGHT */}
        <p className="nav d-block fs-s text-center text-md-start pb-2 pb-lg-0 mb-0">
          &copy; {footerData.copyright.text}{' '}
          <Link
            className="nav-link d-inline-block p-0"
            to={footerData.copyright.url}
            target="_blank"
            rel="noopener"
          >
            {footerData.copyright.by}
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
