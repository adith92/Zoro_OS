import { VynaaEndpoint, VynaaOutputType } from '../types/vynaa';

export function inferVynaaOutputType(endpoint: VynaaEndpoint): VynaaOutputType {
  const fullText = `${endpoint.label} ${endpoint.endpoint} ${endpoint.category}`.toLowerCase();

  const imageKeywords = ['image', 'img', 'canvas', 'meme', 'qc', 'brat', 'photooxy', 'sticker', 'emoji', 'wallpaper', 'pinterest', 'logo', 'anime convert', 'text2img'];
  if (imageKeywords.some(kw => fullText.includes(kw))) {
    return 'image';
  }

  const audioKeywords = ['audio', 'tts', 'spotify/audio', 'soundcloud'];
  if (audioKeywords.some(kw => fullText.includes(kw))) {
    return 'audio';
  }

  const videoKeywords = ['video', 'reels', 'stream', 'youtube', 'tiktok', 'downloader'];
  if (videoKeywords.some(kw => fullText.includes(kw))) {
    // Return video, or link. Defaulting to video/link for downladers since we parse the content-type at runtime anyway.
    return 'video';
  }

  const textJsonCategories = ['news', 'search', 'islamic', 'games', 'ai', 'status'];
  if (textJsonCategories.some(cat => fullText.includes(cat))) {
    return 'json';
  }

  return 'json';
}
