/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Home } from '@/pages/Home';
import { Chat } from '@/pages/Chat';
import { Settings } from '@/pages/Settings';
import { PlaceholderPage } from '@/pages/PlaceholderPage';
import { ZoroAdventures } from '@/pages/ZoroAdventures';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
          <Route path="hub" element={<PlaceholderPage title="Multiverse AI Hub" />} />
          <Route path="anime" element={<PlaceholderPage title="Anime Realm" />} />
          <Route path="downloader" element={<PlaceholderPage title="Media Downloader Galaxy" />} />
          <Route path="games" element={<ZoroAdventures />} />
          <Route path="islamic" element={<PlaceholderPage title="Islamic Corner" />} />
          <Route path="fun" element={<PlaceholderPage title="Asupan & Fun" />} />
          <Route path="*" element={<PlaceholderPage title="404 - Dimension Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
