import Splide from '@splidejs/splide';

import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const houses = () => {
  console.log('houses');

  const attr = 'data-carousel';
  const carousels = queryElements(`[${attr}="component"]`);

  carousels.forEach((carousel) => {
    const { parentElement } = carousel;
    if (parentElement) {
      const parent = queryElement(
        `.layout-grid:not(.w-condition-invisible) [${attr}="parent"]`,
        parentElement
      );

      if (parent) parent.appendChild(carousel);
    }

    const { type } = carousel.dataset;
    const perPage = type === 'Full' ? 1 : type === 'Halves' ? 2 : type === 'Thirds' ? 3 : 1;

    const slides = queryElements('.splide__slide', carousel);
    const numberOfSlides = slides.length;

    const slider = new Splide(carousel, {
      type: numberOfSlides > 1 ? 'loop' : 'slide',
      autoplay: true,
      perPage,
      perMove: 1,
      gap: 'var(--gap)',
      pagination: false,
      arrows: numberOfSlides > 1 ? true : false,
      breakpoints: {
        767: {
          perPage: 1,
        },
      },
    }).mount();
  });
};
