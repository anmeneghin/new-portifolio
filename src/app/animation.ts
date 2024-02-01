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
  transition('HomePage => SkillsPage, SkillsPage => AboutPage', [
    style({ position: 'relative', top: '50%' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '50%',
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('800ms ease-out', style({ right: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('800ms ease-out', style({ right: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('SkillsPage => HomePage, AboutPage => SkillsPage', [
    style({ position: 'relative', top: '50%' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('800ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('800ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
]);
