import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CardWomen = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 style={{ fontWeight: 'bold' }}>Women's Latest</h1>
        <p style={{ fontStyle: 'italic' }}>
          Details to details is what makes Siddiqui shop different from the other theme.
        </p>
      </div>

      <div className="container mt-4">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          navigation
          loop={true}
          breakpoints={{
    0: { slidesPerView: 1 },      // mobile
    576: { slidesPerView: 2 },    // tablet
    992: { slidesPerView: 3 },    // desktop/laptop
  }}
        >
          {/* Each SwiperSlide must wrap one card */}
          <SwiperSlide>
            <div className="card">
              <img src="/images/women-01.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">AirForce 1 X</h5>
                <p className="card-text">$90</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img src="/images/women-02.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Love Nena 20'</h5>
                <p className="card-text">$150</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img src="/images/women-03.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Classic Spring</h5>
                <p className="card-text">$120</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img src="/images/women-01.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">AirForce 1 X</h5>
                <p className="card-text">$90</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
        <hr className="border-bottom mt-5" style={{border:'dotted'}} />
    </>
  );
};

export default CardWomen;
