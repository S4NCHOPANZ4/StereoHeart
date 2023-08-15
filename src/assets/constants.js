import { HiOutlineHashtag, HiOutlineHome, HiFire, HiOutlineUserGroup } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi'
import { FaCompactDisc } from 'react-icons/fa'

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Discover', to: '/', icon: FaCompactDisc },
  { name: 'Around You', to: '/around-you', icon: BiWorld },
  { name: 'Top Artists', to: '/top-artists', icon: HiFire },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
