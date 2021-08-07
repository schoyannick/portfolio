import { SelectedPage } from '../redux/app/actions';

export const PAGES = [
    {
        title: 'Home',
        href: '/',
        type: SelectedPage.HOME,
    },{
        title: 'Projects',
        href: '/projects',
        type: SelectedPage.PROJECTS,
    }, {
        title: 'Skills',
        href: '/skills',
        type: SelectedPage.SKILLS,
    },
];
