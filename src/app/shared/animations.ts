import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),

      query(':enter', [
        style({left: '-100%'})
      ], {optional: true}),

      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('1s ease-out', style({left: '100%', opacity: 0}))
        ], {optional: true}),
        query(':enter', [
          animate('1s ease-out', style({left: '0%'}))
        ], {optional: true}),
        query('@*', animateChild(), {optional: true})
      ]),
    ])
  ]);

export const fadeAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),


      group([
        query(':leave', [
          animate(300,
            style({
              opacity: 0,
            })
          ),
        ], {optional: true}),
        query(':enter', [
          style({
            opacity: 0,
          }),
          animate(300),
        ], {optional: true}),
        query('@*', animateChild(), {optional: true})
      ]),
    ])
  ]);
