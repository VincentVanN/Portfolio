/* eslint-disable import/prefer-default-export */
import { navLeftVariants, navRightVariants } from '../../variants/variants';

export const navData = [
  {
    name: 'nav-left',
    variants: navLeftVariants,
    link: [
      {
        name: 'nav-link',
        path: '/',
        position: 1,
        text: 'accueil',
      },
      {
        name: 'nav-link',
        path: '/about',
        position: 2,
        text: 'techno',
      },
    ],
  },
  {
    name: 'nav-right',
    variants: navRightVariants,
    link: [
      {
        name: 'nav-link',
        path: '/realisations',
        position: 3,
        text: 'realisations',
      },
      {
        name: 'nav-link',
        path: '/contact',
        position: 4,
        text: 'contact',
      },
    ],
  },
];
