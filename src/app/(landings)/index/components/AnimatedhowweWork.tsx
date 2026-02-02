import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ArrowIcon from '@/components/ArrowIcon';

const steps = [
  {
    id: '01',
    title: 'Strategy',
    desc: 'Strategic planning and leadership.',
    img: '/images/business-acordion-img1.jpg',
  },
  {
    id: '02',
    title: 'Branding',
    desc: 'Modern creative solutions.',
    img: '/images/business-acordion-img2.jpg',
  },
  {
    id: '03',
    title: 'Marketing',
    desc: 'Growth & optimization.',
    img: '/images/business-acordion-img3.jpg',
  },
  {
    id: '04',
    title: 'Planning',
    desc: 'Insights driven decisions.',
    img: '/images/business-acordion-img4.jpg',
  },
];

const HowWeWork = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="how-we-work-section py-5">
      <Container fluid className="px-lg-5">
        <div className="how-we-work-wrapper">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`work-panel ${active === index ? 'active' : ''}`}
              onClick={() => setActive(index)}
            >
              {/* background */}
              <div
                className="work-bg"
                style={{ backgroundImage: `url(${step.img})` }}
              />

              {/* vertical text */}
              <div className="vertical-label">
                <span>{step.title}</span>
              </div>

              {/* content */}
              <div className="work-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <button className="btn btn-outline-light rounded-pill gap-2">
                  View more
                    <ArrowIcon />
                </button>
              </div>

              {/* number */}
              <div className="work-number">{step.id}</div>
            </div>
          ))}
        </div>
      </Container>

      {/* INLINE CSS */}
      <style>{`
        .how-we-work-section {
          background-color: #1e2d30;
        }

        .how-we-work-wrapper {
          display: flex;
          height: 80vh;
          overflow: hidden;
        }

        .work-panel {
          position: relative;
          flex: 1;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: flex 0.7s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .work-panel.active {
          flex: 4;
        }

        .work-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.45);
          transition: transform 0.7s ease;
        }

        .work-panel:hover .work-bg {
          transform: scale(1.05);
        }

        .vertical-label {
          position: absolute;
          left: 130px;
          bottom: 100px;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 30px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.7);
          transition: opacity 0.4s ease;
        }

        .work-panel.active .vertical-label {
          opacity: 0;
        }

        .work-content {
          position: relative;
          z-index: 2;
          color: #fff;
          max-width: 360px;
          text-align: left;
          opacity: 0;
          transform: translateX(40px);
          transition: all 0.6s ease;
        }
        
        .work-panel.active .work-content {
          opacity: 1;
          transform: translateX(0);
        }

        .work-content h3 {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .work-content p {
          opacity: 0.85;
          margin-bottom: 20px;
        }

        .work-number {
          position: absolute;
          right: 10px;
          bottom: 5px;
          font-size: 50px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.35);
        }

        .rotate-arrow {
          transform: rotate(180deg);
        }

        .work-content h3 {
            color: rgba(255,255,255,0.6);
            transition: color 0.4s ease;
        }

        .work-content p {
            color: rgba(255,255,255,0.55);
            transition: color 0.4s ease;
        }

        .vertical-label span {
        color: rgba(255,255,255,0.5);
        transition: color 0.4s ease, opacity 0.4s ease;
        }


        /* Responsive */
        @media (max-width: 991px) {
          .how-we-work-wrapper {
            flex-direction: column;
            height: auto;
          }

          .work-panel,
          .work-panel.active {
            flex: none;
            height: 260px;
          }

          .vertical-label {
            display: none;
          }

          .work-content {
            transform: translateY(30px);
            text-align: center;
          }

          .work-panel.active .work-content {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWork;
