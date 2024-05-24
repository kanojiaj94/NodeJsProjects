import {AlignText} from '../../../src/constants.js';

export const props = [

  {
    name: 'BlackAndWhiteWheel',
    radius: 0.75,
    itemLabelRadius: 0.95,
    itemLabelRadiusMax: 0.75,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    itemLabelColors: ['green'],
    itemLabelBaselineOffset: -0.07,
    itemLabelFont: 'roboto',
    itemLabelFontSizeMax: 25,
    itemBackgroundColors: ['black', 'white' ],
    rotationSpeedMax: 500,
    rotationResistance: -100,
    lineWidth: 1,
    lineColor: '#fff',
    image: './img/wheel-center.svg',
    overlayImage: './img/background.svg',
    items: [
      {
        label: '5000',
        weight: 4,
      },
      {
        label: '200',
        weight: 100,
      },
      {
        label: '1000',
        weight: 20,
      },
      {
        label: '400',
        weight: 50,
      },
      {
        label: '2000',
        weight: 10,
      },
      {
        label: '200',
        weight: 100,
      },
      {
        label: '1000',
        weight: 20,
      },
      {
        label: '400',
        weight: 50,
      },
    ],

  },
];