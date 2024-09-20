import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md: grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='happy hacking' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            consequuntur, provident incidunt, ex vero non odio repudiandae porro
            ut rem ab numquam odit officiis corrupti quibusdam, iure et
            deserunt. Molestiae.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
