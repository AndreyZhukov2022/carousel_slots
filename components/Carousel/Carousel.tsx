import React, { FC, memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Card from "./Card/Card";
import { CASINO } from '../../mock/mockData';
import NavigationButton from "./NavigationButton/NavigationButton";

import styles from './Carousel.module.scss';

const Carousel: FC = () => {
  const navigationPrevRef = useRef<HTMLImageElement>(null);
  const navigationNextRef = useRef<HTMLImageElement>(null);

  const [, setInitSwiper] = useState(false);

  const breakpoints = {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 28,
      width: 242,
    },
    900: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 28,
      width: 520,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 28,
      width: 788
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 28,
      width: 1040
    },
    1440: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 28,
      width: 1327,
    }
  };

  return (
    <div className={styles.container}>
      <Swiper
        // dir="rtl"
        spaceBetween={28}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletClass: styles.bullet,
          bulletActiveClass: styles['bullet-active']
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          disabledClass: styles['navigation-button-disabled']
        }}
        modules={[Pagination, Navigation]}
        className={styles['custom-swiper']}
        onSwiper={() => {
          setInitSwiper(true);
        }}
        breakpoints={breakpoints}
      >
        {[...CASINO, ...CASINO].map((casino) => (
          <SwiperSlide key={`${casino.casino}`} >
            <Card
              casino={casino.casino}
              logo={casino.logo}
              amount={casino.amount}
              exclusive={casino.exclusive}
              background={casino.background}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButton direction="prev" className={styles['navigation-prev']} ref={navigationPrevRef} />
      <NavigationButton direction="next" className={styles['navigation-next']} ref={navigationNextRef} />
    </div>
  );
};

export default memo(Carousel);
