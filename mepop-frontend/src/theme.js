import { transparentize, toColorString } from 'polished'
import _ from 'lodash'
/**
 * Responsive Breakpoints
 */
const breakpoints = [{ // has to be an array for some stupid reason
  xs: '600',
  s: '768',
  m: '992',
  l: '1020',
  xl: '1200'
}]
// -> @media only screen and (max-width: ${({theme})=>theme.breakpoints[0].s}px)

/**
 * Spacing
 */

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

/**
 * Scrollbars
 */
const scrollbars = {
  light: `
  /* width */
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    transition: 0.5s;
  }
  
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    transition: 0.5s;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    transition: 0.5s;
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #555;
    transition: 0.5s;
  }
  
  &:hover {
    /* width */
    &::-webkit-scrollbar {
      width: 1px;
      height: 1px;
      transition: 0.5s;
    }
  }`
}
/**
 * Colors
 */

// color values
let colors = {
  white: '#fff',
  whiteDark: '#f3f3f3',
  black: '#000',
  textGrey: '#585858',
  greyDarkest: '#252629',
  greyDarker: '#585853',
  greyDark: '#787878',
  grey: '#8c8c8c',
  greyLight: '#B2B2B2',
  greyLight2: 'rgb(198, 198, 198)',
  greyLighter: '#DADADA',
  greyLightest: '#E1E1E1',
  greyDisabled: '#ededed',
  green: '#069f06',
  greenDark: '#006644',
  greenSoftDarkest: '#133531',
  greenSoftDark: '#506A67',
  greenSoft: '#309F87',
  greenSoftLight: '#BBD8D3',
  greenSoftLighter: '#D3EEEB',
  teal: '#24867A',
  tealDark: '#18635a',
  blueDark: '#293757',
  blueHighlight: '#3458ac',
  blue: '#2684FF',
  blueLight: '#96c1da',
  bluegreyLight: '#849CA0',
  yellowDark: '#bb6124',
  yellow: '#FFBB2a',
  yellowLight: '#FFC39B',
  red: '#CD0019',
  depopRed: '#FF2300',
  redDark: '#9C0013',
  redLight: '#FDC0C7',
  redDisabled: '#C19C9C',
  purple: '#86529A',

  // Pastel Colors
  pastelPurple: '#8884d8',
  pastelBlue: '#83a6ed',
  pastelBlueLight: '#8dd1e1',
  pastelGreen: '#82ca9d',
  pastelGreenLight: '#a4de6c',
  pastelGreenLighter: '#d0ed57',
  pastelYellow: '#FFF933',
  pastelOrange: '#ffc658',
  pastelPink: '#ffd1dc',
  pastelRose: '#fc746d'
}

// color aliases
colors = {
  ...colors,
  transparent: 'transparent',
  primary: colors.tealDark,
  textSubtle: colors.greyText,
  accent: colors.blueHighlight,
  danger: colors.red,
  warning: colors.yellow,
  success: colors.green,
  good: colors.green,
  bad: colors.red,
  neutral: colors.blue,
  mainBg: colors.greyLightest,
  pastelArray: [
    colors.pastelPurple,
    colors.pastelBlue,
    colors.pastelBlueLight,
    colors.pastelGreen,
    colors.pastelGreenLight,
    colors.pastelGreenLighter,
    colors.pastelYellow,
    colors.pastelOrange,
    colors.pastelPink,
    colors.pastelRose
  ]
}

// TOMIS const gradients = {
//   brand: 'linear-gradient(100deg, #306e7b 0%, #43837a 70%)'
// }

/**
 * Boxes
 */

const heights = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48
}

const borders = ['0px solid', '1px solid', '2px solid']
const borderRadius = {
  none: '0px',
  normal: '4px',
  more: '1em',
  full: '100%'
}

const shadows = {
  subtle: '0 0 55px 0 rgba(0,0,0,0.1)',
  subtleSmall: '0 0 35px 0 rgba(0,0,0,0.06)',
  subtleSmallBelow: '0 5px 15px 0 rgba(0,0,0,0.03)',
  subtleTeal: `0 0 35px 0 ${transparentize(0.75, colors.greenSoft)}`,
  normal: '2px 4px 6px 0 rgba(0, 0, 0, .2);',
  heavy: '0 0 35px 0 rgba(0,0,0,0.2)',
  smallTeal: `0 0 12px 0 ${transparentize(0.85, colors.greenSoft)}`
}

/**
 * Typography
 */

const fonts = ['brandon-grotesque', 'sans-serif']

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  black: 900
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.03em'
}

/**
 * Animation
 */

const transitionDurations = ['0s', '0.2s']

const theme = {
  // Responsive Breakpoints
  breakpoints,
  // Spacing
  space,
  // Boxes
  heights,
  borders,
  borderRadius,
  shadows,
  // Typography
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  // ScrollBars
  scrollbars,
  // Colors
  colors,
  // Animation
  transitionDurations
}

export default theme
