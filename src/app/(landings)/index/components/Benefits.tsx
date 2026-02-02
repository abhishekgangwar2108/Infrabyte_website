import award from '@/assets/img/landing/digital-agency/icons/award.svg';
import idea from '@/assets/img/landing/digital-agency/icons/idea.svg';
import team from '@/assets/img/landing/digital-agency/icons/team.svg';
import { Container } from 'react-bootstrap';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const benefitsData: Benefit[] = [
  {
    id: 1,
    title: 'Engineering Performance',
    description:
      'We design and build digital systems where performance, reliability, and scalability are foundational — not optimisations added later.',
    icon: idea,
  },
  {
    id: 2,
    title: 'Intelligence by Design',
    description:
      'Data and intelligence are embedded thoughtfully into platforms and workflows, enabling informed decisions without unnecessary complexity.',
    icon: award,
  },
  {
    id: 3,
    title: 'Built for Future',
    description:
      'Our work is structured to adapt — supporting growth, change, and emerging technologies without constant re-engineering.',
    icon: team,
  },
];

const Benefits = () => {
  return (
    <section className="mb-5 pt-lg-5" id="benefits">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">What we Focus On</h2>
          <p className="mx-auto text-muted" style={{ maxWidth: '720px' }}>
            We help organisations build digital systems that are designed to perform
            consistently, securely, and at scale.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
        >
          {benefitsData.map(benefit => (
            <SwiperSlide key={benefit.id}>
              <div className="text-center px-2">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="d-block mb-4 mx-auto"
                  style={{ opacity: 0.9 }}
                />
                <h4 className="mb-2 pb-1 fw-semibold">{benefit.title}</h4>
                <p className="mx-auto text-muted" style={{ maxWidth: '336px', lineHeight: 1.6 }}>
                  {benefit.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Benefits;
