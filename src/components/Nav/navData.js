/* eslint-disable import/prefer-default-export */
import { navLeftVariants, navRightVariants } from '../../variants/variants';

export const navData = [
  {
    name: 'nav-left',
    variants: navLeftVariants,
    link: [
      {
        name: 'nav-link',
        path: '/about',
        position: 1,
        text: ['a', 'b', 'o', 'u', 't'],
      },
      {
        name: 'nav-link',
        path: '/realisations',
        position: 2,
        text: ['r', 'e', 'a', 'l', 'i', 's', 'a', 't', 'i', 'o', 'n', 's'],
      },
    ],
  },
  {
    name: 'nav-center',
    variants: null,
    link: [
      {
        name: 'nav-link',
        path: '/',
        position: 3,
        text: ['a', 'c', 'c', 'u', 'e', 'i', 'l'],
      },
    ],
  },
  {
    name: 'nav-right',
    variants: navRightVariants,
    link: [
      {
        name: 'nav-link',
        path: '/Curriculum-vitae',
        position: 4,
        text: ['c', 'u', 'r', 'r', 'i', 'c', 'u', 'l', 'u', 'm', ' ', 'v', 'i', 't', 'a', 'e'],
      },
      {
        name: 'nav-link',
        path: '/contact',
        position: 5,
        text: ['c', 'o', 'n', 't', 'a', 'c', 't'],
      },
    ],
  },
];
