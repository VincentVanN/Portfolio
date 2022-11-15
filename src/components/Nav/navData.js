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
        text: 'about',
      },
      {
        name: 'nav-link',
        path: '/realisations',
        position: 2,
        text: 'realisation',
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
        text: 'accueil',
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
        text: 'curriculumvitae',
      },
      {
        name: 'nav-link',
        path: '/contact',
        position: 5,
        text: 'contact',
      },
    ],
  },
];
