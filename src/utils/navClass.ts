import { queryElement } from '$utils/queryElement';

export const navClass = () => {
  const navComponent = queryElement<HTMLDivElement>('.nav_component');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 128) {
    navComponent.classList.add('is-scrolled');
  } else {
    navComponent.classList.remove('is-scrolled');
  }
};
