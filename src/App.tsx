import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { Home } from './pages/Home';
import { TravelTours } from './pages/TravelTours';
import { MediaTV } from './pages/MediaTV';
import { EventsEntertainment } from './pages/EventsEntertainment';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="travels-tours" element={<TravelTours />} />
          <Route path="media-tv" element={<MediaTV />} />
          <Route path="events-entertainment" element={<EventsEntertainment />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}
