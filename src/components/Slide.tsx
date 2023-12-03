import { Banner } from '@/interfaces/banner'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useGetBannersQuery } from '@/app/services/banner';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Slide: React.FC = () => {
  const { data: banners } = useGetBannersQuery()

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-[300px]"
    >
      {banners?.data ? banners?.data.map((banner: Banner) => {
        return (
          <SwiperSlide>
            <Link to={banner.product_link}>
              <img src={banner.image.url} className='object-cover w-full' />
            </Link>
          </SwiperSlide>
        )
      }) : null}
    </Swiper>
  )
}

export default Slide