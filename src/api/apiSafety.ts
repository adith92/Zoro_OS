export function classifyVtechEndpointSafety(input: {
  label: string;
  category: string;
  endpoint: string;
  rawUrl?: string;
}): {
  safe: boolean;
  enabledByDefault: boolean;
  sensitiveReason?: string;
  tags: string[];
} {
  const { label, category, endpoint } = input;
  const lowerLabel = label.toLowerCase();
  const lowerPath = endpoint.toLowerCase();
  const lowerCat = category.toLowerCase();
  const fullText = `${lowerLabel} ${lowerPath} ${lowerCat}`;

  // Check unsafe keywords
  const unsafeKeywords = [
    'fakektp', 'ktp', 'gore', 'nhentai', 'xnxx', 'xvideos', 'adult', 'porn', 'bokep',
    'stalk', 'getotp', 'gettoken', 'mutasiqr', 'wdqr', 'createpayment', 'payment',
    'pakasir', 'saweria', 'orderkuota', 'password', 'token', 'cekewallet',
    'subdomain/create', 'cloudflare' // Add more bad words as needed
  ];

  let isUnsafe = false;
  let sensitiveReason = '';

  for (const word of unsafeKeywords) {
    if (fullText.includes(word)) {
      isUnsafe = true;
      sensitiveReason = `Contains restricted keyword: ${word}`;
      break;
    }
  }

  // Explicit check for Femboy (from prompt)
  if (fullText.includes('femboy')) {
     isUnsafe = true;
     sensitiveReason = 'Potentially sensitive joke endpoint';
  }

  // Define safe categories base rules
  const safeCategories = [
    'artificial intelligence', 'canvas & image generator', 'maker & creator',
    'islamic', 'agama & doa', 'games & quiz', 'news & berita', 'search & utility',
    'status & monitoring', 'tools & generator', 'anime', 'sticker', 'emoji',
    'fun & games', 'media downloader'
  ];

  let isCategorySafe = safeCategories.some(cat => lowerCat.includes(cat));
  
  if (!isCategorySafe && !isUnsafe) {
      // By default if we don't know the category, it might be unsafe
      isUnsafe = true;
      sensitiveReason = `Unrecognized category: ${category}`;
  }

  if (isUnsafe) {
    return {
      safe: false,
      enabledByDefault: false,
      sensitiveReason,
      tags: ['unsafe', 'sensitive']
    };
  }

  return {
    safe: true,
    enabledByDefault: true,
    tags: []
  };
}
