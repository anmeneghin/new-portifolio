import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('AboutPage => ProjectsPage, ProjectsPage => AboutPage', [
    style({ transform: 'translateY(-100%)' }),
    animate(
      '500ms ease-out',
      style({
        transform: 'translateY(0%)',
      })
    ),
  ]),
]);
