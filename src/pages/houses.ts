import Splide from '@splidejs/splide';

import { queryElements } from '$utils/queryElements';

export const houses = () => {
  console.log('houses');

  const carousels = queryElements('.splide');
  carousels.forEach((carousel) => {
    const { type } = carousel.dataset;
    const perPage = type === 'Full' ? 1 : type === 'Halves' ? 2 : type === 'Thirds' ? 3 : 1;

    const slider = new Splide(carousel, {
      type: 'loop',
      autoplay: true,
      perPage,
      perMove: 1,
      gap: 'var(--gap)',
      pagination: false,
      breakpoints: {
        767: {
          perPage: 1,
        },
      },
    }).mount();
  });
};
