import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-purple-200 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Linda</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            where imagination meets innovation / transforming digital dreams
            into reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/Zileena6'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/linda-leminaho-4b9666273'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.facebook.com/Zileena6'>
              <FaFacebookSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};

export default Hero;
