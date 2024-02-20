import { houses } from './houses';

export const pages = () => {
  console.log('pages');
  const { pathname } = window.location;

  if (pathname.includes('/houses/')) {
    houses();
  }
};
