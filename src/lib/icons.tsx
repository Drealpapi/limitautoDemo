/**
 * Centralised Font Awesome icon exports.
 * Import from here throughout the project — never import directly from @fortawesome.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';

// Solid icons
import {
  faPhone, faPhoneFlip,
  faBars, faXmark,
  faDroplet,
  faChevronDown, faChevronRight,
  faArrowRight, faArrowDown,
  faShieldHalved,
  faClock,
  faAward,
  faStar,
  faVolumeXmark, faVolumeHigh,
  faTriangleExclamation,
  faWater, faWaterLadder,
  faFire,
  faBath,
  faEyeDropper,
  faCodeMerge,
  faArrowsUpDown,
  faShower,
  faUtensils,
  faMagnifyingGlass,
  faCircleCheck,
  faBolt,
  faCalendarDays,
  faMessage,
  faCircleExclamation,
  faEnvelope,
  faLocationDot,
  faUsers,
  faHouseChimney,
  faUserCheck,
  faDollarSign,
  faWrench,
  faToolbox,
  faMapMarkerAlt,
  faRotateRight,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

// Brand icons
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Re-export FontAwesomeIcon as Fa for brevity
export { FontAwesomeIcon as Fa };

// Export icon definitions grouped by usage
export const Icons = {
  // Nav / UI
  phone:          faPhone,
  phoneFlip:      faPhoneFlip,
  bars:           faBars,
  xmark:          faXmark,
  chevronDown:    faChevronDown,
  chevronRight:   faChevronRight,
  arrowRight:     faArrowRight,
  arrowDown:      faArrowDown,
  rotate:         faRotateRight,
  send:           faPaperPlane,

  // Brand
  droplet:        faDroplet,
  droplets:       faDroplet,

  // Trust / features
  shield:         faShieldHalved,
  clock:          faClock,
  award:          faAward,
  star:           faStar,
  check:          faCircleCheck,
  bolt:           faBolt,
  houseChimney:   faHouseChimney,
  userCheck:      faUserCheck,
  dollar:         faDollarSign,
  users:          faUsers,

  // Volume
  volumeOff:      faVolumeXmark,
  volumeOn:       faVolumeHigh,

  // Plumbing services
  emergency:      faTriangleExclamation,
  water:          faWater,
  drain:          faWaterLadder,
  fire:           faFire,
  bath:           faBath,
  eyeDropper:     faEyeDropper,
  merge:          faCodeMerge,
  arrowsUpDown:   faArrowsUpDown,
  shower:         faShower,
  utensils:       faUtensils,
  search:         faMagnifyingGlass,
  wrench:         faWrench,
  toolbox:        faToolbox,
  mapPin:         faMapMarkerAlt,

  // Contact form
  calendar:       faCalendarDays,
  message:        faMessage,
  alertCircle:    faCircleExclamation,
  envelope:       faEnvelope,
  location:       faLocationDot,

  // Social
  linkedin:       faLinkedin,
  facebook:       faFacebook,
};

export type { SizeProp };
