import { useRouter } from 'next/router';
import MovieData from '../utils/requests.js';

const Nav = () => {
  const router = useRouter()

  return (
    <nav className='relative'>
      <div className='flex pb-5 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(MovieData).map(([key, { title, url}]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24'
          >{title}</h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-16 w-1/12'/>
      <div className='absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-16 w-1/12'/>
    </nav>
  );
}

export default Nav;