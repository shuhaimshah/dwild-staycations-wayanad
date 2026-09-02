import React from 'react';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { AFrameFeature } from '../components/AFrameFeature';
import { WhyDwild } from '../components/WhyDwild';
import { WoodenCabinFeature } from '../components/WoodenCabinFeature';
import { Accommodation } from '../components/Accommodation';
import { SignatureBreak } from '../components/SignatureBreak';
import { Experiences } from '../components/Experiences';
import { CinematicBreak } from '../components/CinematicBreak';
import { EditorialGallery } from '../components/EditorialGallery';
import { WayanadDestination } from '../components/WayanadDestination';
import { LocationMap } from '../components/LocationMap';
import { BookingForm } from '../components/BookingForm';
import { InstagramSection } from '../components/InstagramSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Intro />
      <AFrameFeature />
      <WhyDwild />
      <WoodenCabinFeature />
      <Accommodation />
      <SignatureBreak />
      <Experiences />
      <CinematicBreak />
      <EditorialGallery />
      <WayanadDestination />
      <LocationMap />
      <BookingForm />
      <InstagramSection />
    </main>
  );
};
