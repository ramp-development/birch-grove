import { formatSliderDots } from '$utils/formatSliderDots';
import { navClass } from '$utils/navClass';
import { queryElements } from '$utils/queryElements';

import { pages } from './pages';

window.Webflow ||= [];
window.Webflow.push(() => {
  pages();
  navClass();
  window.addEventListener('scroll', navClass);

  const sliders = queryElements<HTMLDivElement>('[data-slider="slider"]');
  if (sliders.length) formatSliderDots(sliders);
});
