/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AppLayout } from '@/components/layout/AppLayout';
import { Home } from '@/pages/Home';
import { Chat } from '@/pages/Chat';
import { Settings } from '@/pages/Settings';
import { PlaceholderPage } from '@/pages/PlaceholderPage';
import { ZoroAdventures } from '@/pages/ZoroAdventures';
import { AIHub } from '@/pages/AIHub';
import { ImageLab } from '@/pages/ImageLab';
import { IslamicCorner } from '@/pages/IslamicCorner';
import { DownloaderGalaxy } from '@/pages/DownloaderGalaxy';
import { GamesQuiz } from '@/pages/GamesQuiz';
import { NewsDeck } from '@/pages/NewsDeck';
import { SearchUtility } from '@/pages/SearchUtility';
import { ToolsLab } from '@/pages/ToolsLab';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster theme="dark" position="top-center" />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
          <Route path="hub" element={<AIHub />} />
          <Route path="image" element={<ImageLab />} />
          <Route path="downloader" element={<DownloaderGalaxy />} />
          <Route path="games" element={<ZoroAdventures />} />
          <Route path="gamesquiz" element={<GamesQuiz />} />
          <Route path="islamic" element={<IslamicCorner />} />
          <Route path="news" element={<NewsDeck />} />
          <Route path="search" element={<SearchUtility />} />
          <Route path="tools" element={<ToolsLab />} />
          <Route path="*" element={<PlaceholderPage title="404 - Dimension Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
