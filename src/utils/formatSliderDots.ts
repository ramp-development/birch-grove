import { queryElements } from './queryElements';

export const formatSliderDots = (sliders: HTMLDivElement[]) => {
  sliders.forEach((slider) => {
    const images = queryElements<HTMLImageElement>('[data-slider="image"]', slider);
    const dots = queryElements<HTMLDivElement>('.w-slider-dot', slider);

    dots.forEach((dot, index) => {
      const image = images[index];
      dot.textContent = image.alt;
    });
  });
};
