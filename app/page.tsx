import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedProjects from './components/FeaturedProjects';
import CloudServices from './components/CloudServices';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CloudServices />
      <FeaturedProjects />
    </>
  );
}
