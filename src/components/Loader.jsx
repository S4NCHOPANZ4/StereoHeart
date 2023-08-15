import {mini_logo} from '../assets';

const Loader = ({title}) => (
  <div className='w-full flex justify-center items-center
  flex-col'>
    <img src={mini_logo} alt="loader" className='mini_icon w-[110px] h-[110px] object-contain' />
    <h1 className='font-bold text-2xl text-white mt-2'>{title || 'loading...'}</h1>
  </div>
);

export default Loader;
