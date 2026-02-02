import Landings from '@/assets/img/landings.jpg';
import Logo from '@/assets/img/infra_Logo2.png';

import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Button, Collapse, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import IconifyIcon from '../IconifyIcon';
// import ThemeToggle from '../ThemeToggle';

type DropdownItem = {
  label: string;
  href: string;
  badge?: string;
};

type DropdownLink = {
  label: string;
  href: string;
};

type DropdownSection = {
  title: string;
  links: DropdownLink[];
};

type AccountLink = {
  label: string;
  href: string;
};

type DropdownColumn1 = DropdownItem[];
type DropdownColumn2 = DropdownSection[];

type NavClass = {
  Headerclass?: string;
  headerSticky?: string;
};

const isParentActive = (links: { href: string }[], pathname: string) => {
  return links.some(link => pathname === link.href || pathname.startsWith(link.href + '/'));
};

const Navbar = ({
  Headerclass = 'header navbar navbar-expand-lg bg-light shadow-sm',
  headerSticky,
}: NavClass) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (!headerSticky) return;
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerSticky]);

  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  const landingsMenu: DropdownColumn1[] = [
    [
      { label: 'Template Intro Page', href: '/index' },
      { label: 'Mobile App Showcase v.1', href: '#' },
      { label: 'Mobile App Showcase v.2', href: '#' },
      { label: 'Mobile App Showcase v.3', href: '#', badge: 'New' },
      { label: 'Product Landing', href: '#' },
      { label: 'SaaS v.1', href: '#' },
      { label: 'SaaS v.2', href: '#' },
      { label: 'SaaS v.3', href: '#' },
      { label: 'SaaS v.4', href: '#' },
      { label: 'SaaS v.5', href: '#', badge: 'New' },
    ],
    [
      { label: 'Startup', href: '#' },
      { label: 'Financial Consulting', href: '#' },
      { label: 'Online Courses', href: '#' },
      { label: 'Medical', href: '#' },
      { label: 'Software Dev Agency v.1', href: '#' },
      { label: 'Software Dev Agency v.2', href: '#' },
      { label: 'Software Dev Agency v.3', href: '#' },
      { label: 'Conference', href: '#' },
      { label: 'Digital Agency', href: '#' },
      { label: 'Blog Homepage', href: '#' },
    ],
  ];

  const pagesMenu: DropdownColumn2[] = [
    [
      {
        title: 'About',
        links: [
          { label: 'About v.1', href: '#' },
          { label: 'About v.2', href: '#' },
          { label: 'About v.3', href: '#' },
        ],
      },
      {
        title: 'Blog',
        links: [
          { label: 'List View with Sidebar', href: '#' },
          { label: 'Grid View with Sidebar', href: '#' },
          { label: 'List View no Sidebar', href: '#' },
          { label: 'Grid View no Sidebar', href: '#' },
          { label: 'Simple Feed', href: '#' },
          { label: 'Single Post', href: '#' },
          { label: 'Podcast', href: '#' },
        ],
      },
    ],
    [
      {
        title: 'Portfolio',
        links: [
          { label: 'Grid View', href: '#' },
          { label: 'List View', href: '#' },
          { label: 'Slider View', href: '#' },
          { label: 'Courses', href: '#' },
          { label: 'Single Project', href: '#' },
          { label: 'Single Course', href: '#' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Services v.1', href: '#' },
          { label: 'Services v.2', href: '#' },
          { label: 'Service Details v.1', href: '#' },
          { label: 'Service Details v.2', href: '#' },
        ],
      },
    ],
    [
      {
        title: 'Pricing',
        links: [{ label: 'Pricing Page', href: '#' }],
      },
      {
        title: 'Contacts',
        links: [
          { label: 'Contacts v.1', href: '#' },
          { label: 'Contacts v.2', href: '#' },
          { label: 'Contacts v.3', href: '#' },
        ],
      },
      {
        title: 'Specialty',
        links: [
          { label: '404 Error v.1', href: '#' },
          { label: '404 Error v.2', href: '#' },
        ],
      },
    ],
  ];

  const accountMenu: AccountLink[] = [
    { label: 'Account Details', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Notifications', href: '#' },
    { label: 'Messages', href: '#' },
    { label: 'Saved Items', href: '#' },
    { label: 'My Collections', href: '#' },
    { label: 'Payment Details', href: '#' },
    { label: 'Sign In', href: '#' },
    { label: 'Sign Up', href: '#' },
  ];

  const allLandingsLinks = landingsMenu.flat();
  const allPagesLinks = pagesMenu.flat().flatMap(section => section.links);
  const allAccountLinks = accountMenu;

  const isLandingsActive = isParentActive(allLandingsLinks, pathname);
  const isPagesActive = isParentActive(allPagesLinks, pathname);
  const isAccountActive = isParentActive(allAccountLinks, pathname);

  return (
    <header className={`${Headerclass} ${isSticky && headerSticky ? headerSticky : ''}`}>
      <div className="container px-3">
        <Link to="/index" className="navbar-brand pe-3">
          <img src={Logo} width={150} alt="Infrabyte" />
        
        </Link>

        <Offcanvas
          id="navbarNav"
          placement="end"
          responsive="xl"
          show={showMenu}
          onHide={() => {
            setShowMenu(false);
            setActiveDropdown(null);
            setOpenMobileDropdown(null);
          }}
        >
          <OffcanvasHeader closeButton className="border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
          </OffcanvasHeader>
          <OffcanvasBody className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item dropdown ${isLandingsActive ? 'active' : ''}`}>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleMobileDropdown('landings')}
                  aria-expanded={openMobileDropdown === 'landings'}
                >
                  <span className="d-flex gap-1 align-items-center">
                    Landings
                    <IconifyIcon icon="bx:chevron-down" fontSize={18} />
                  </span>
                </button>
                <Collapse in={openMobileDropdown === 'landings'}>
                  <div className="dropdown-menu p-0">
                    <div className="d-lg-flex">
                      <div
                        className="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0"
                        style={{ margin: '-1px', backgroundColor: '#f3f6ff' }}
                      >
                        <img src={Landings} alt="Landings" />
                      </div>
                      {landingsMenu.map((column, colIndex) => (
                        <div
                          key={colIndex}
                          className="mega-dropdown-column pt-lg-3 pb-lg-4"
                          style={
                            colIndex === 0
                              ? { ['--si-mega-dropdown-column-width' as string]: '15rem' }
                              : {}
                          }
                        >
                          <ul className="list-unstyled mb-0">
                            {column.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={item.href}
                                  className={`dropdown-item d-flex align-items-center ${pathname === item.href ? 'active' : ''
                                    }`}
                                  onClick={() => setShowMenu(false)}
                                >
                                  {item.label}
                                  {item.badge && (
                                    <span className="badge bg-success ms-2">{item.badge}</span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </Collapse>
              </li>

              <li className={`nav-item dropdown ${isPagesActive ? 'active' : ''}`}>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleMobileDropdown('pages')}
                  aria-expanded={openMobileDropdown === 'pages'}
                >
                  <span className="d-flex gap-1 align-items-center">
                    Pages
                    <IconifyIcon icon="bx:chevron-down" fontSize={18} />
                  </span>
                </button>
                <Collapse in={openMobileDropdown === 'pages'}>
                  <div className="dropdown-menu">
                    <div className="d-lg-flex pt-lg-3">
                      {pagesMenu.map((column, colIndex) => (
                        <div key={colIndex} className="mega-dropdown-column">
                          {column.map((section, secIndex) => (
                            <div key={secIndex}>
                              <h6 className="px-3 mb-2">{section.title}</h6>
                              <ul className="list-unstyled mb-3">
                                {section.links.map((link, linkIndex) => (
                                  <li key={linkIndex}>
                                    <Link
                                      to={link.href}
                                      className={`dropdown-item py-1 ${pathname === link.href ? 'active' : ''
                                        }`}
                                      onClick={() => setShowMenu(false)}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </Collapse>
              </li>

              <li className={`nav-item dropdown ${isAccountActive ? 'active' : ''}`}>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleMobileDropdown('account')}
                  aria-expanded={openMobileDropdown === 'account'}
                >
                  <span className="d-flex gap-1 align-items-center">
                    Account
                    <IconifyIcon icon="bx:chevron-down" fontSize={18} />
                  </span>
                </button>
                <Collapse in={openMobileDropdown === 'account'}>
                  <ul className="dropdown-menu">
                    {accountMenu.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className={`dropdown-item ${pathname === item.href ? 'active' : ''}`}
                          onClick={() => setShowMenu(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              </li>
              <li className={`nav-item dropdown ${pathname === '/contacts-v2' ? 'active' : ""}`}>
                <Link to="/contacts-v2" className="nav-link">Contact</Link>
              </li>
            </ul>
          </OffcanvasBody>
          <div className="offcanvas-header border-top">
            <a
              href="#"
              className="btn btn-primary w-100"
              rel="noopener"
              onClick={() => setShowMenu(false)}
            >
              <IconifyIcon icon="bx:cart" className="fs-4 lh-1 me-1" />
              &nbsp;Buy now
            </a>
          </div>
        </Offcanvas>

        <button
          type="button"
          className="navbar-toggler"
          aria-label="Toggle navigation"
          onClick={() => setShowMenu(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Button
          as="a"
          href="/contacts-v2"
          className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
          rel="noopener"
        >
          <IconifyIcon icon="bx:phone" className="fs-5 lh-1 me-1" />
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
