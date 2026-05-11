const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    for (const [from, to] of replacements) {
        content = content.split(from).join(to);
    }

    // RegEx replacements
    content = content.replace(/ZORO OS/g, "Zoro Universe");
    content = content.replace(/Zoro OS/g, "Zoro Universe");
    content = content.replace(/zoro-endpoint-engine/g, "zoro-universe");
    content = content.replace(/ZORO_ENDPOINT_ENGINE/g, "ZORO_UNIVERSE");
    content = content.replace(/ZORO ENGINE/g, "ZORO UNIVERSE");
    content = content.replace(/Zoro Chat Engine/g, "Zoro Universe Chat");

    if (original !== content) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const replacements = [
    ['zoroRestApiKey', 'vtechApiKey'],
    ['setZoroRestApiKey', 'setVtechApiKey'],
    ['zoroRestApiStatus', 'vtechApiStatus'],
    ['setZoroRestApiStatus', 'setVtechApiStatus'],
    ['zoroRestUserProfile', 'vtechUserProfile'],
    ['setZoroRestUserProfile', 'setVtechUserProfile'],
    ['zoroRestLimit', 'vtechLimit'],
    ['setZoroRestLimit', 'setVtechLimit'],
    ['useZoroProxy', 'useVtechProxy'],
    ['setUseZOROProxy', 'setUseVtechProxy'],
    ['useZoroProxy', 'useVtechProxy'],
    ['selectedRestAiEndpointId', 'selectedVtechAiEndpointId'],
    ['setSelectedRestAiEndpointId', 'setSelectedVtechAiEndpointId'],
    ['VITE_ZORO_API_BASE_URL', 'VITE_VTECH_BASE_URL'],
    ['VITE_ZORO_API_KEY', 'VITE_VTECH_API_KEY'],
    ['ZORO_ENDPOINTS', 'VTECH_ENDPOINTS'],
    ['FALLBACK_API_ENDPOINTS', 'FALLBACK_VTECH_ENDPOINTS'],
    ['GENERATED_API_ENDPOINTS', 'GENERATED_VTECH_ENDPOINTS'],
    ['ApiEndpoint', 'VtechEndpoint'], // Renaming types
    ['ApiCallResult', 'VtechCallResult'],
    ['ZoroParams', 'VtechParams'],
    ['ZORO_BASE_URL', 'VTECH_BASE_URL'],
    ['buildZoroUrl', 'buildVtechUrl'],
    ['callApiEndpoint', 'callVtechEndpoint'],
    ['testApiPing', 'testVtechPing'],
    ['getApiHealth', 'getVtechHealth'],
    ['getApiStatus', 'getVtechStatus'],
    ['getApiUserLimit', 'getVtechUserLimit'],
    ['getApiUserProfile', 'getVtechUserProfile'],
    ['apiRegistry', 'vtechRegistry'],
    ['apiEndpoints.fallback', 'vtechEndpoints.fallback'],
    ['apiEndpoints.generated', 'vtechEndpoints.generated'],
    ['universalApi', 'universalVtech'],
    ['zoroLlmRouter', 'llmRouter'],
    ['ZORO API', 'VTECH API'],
    ['Zoro API', 'VTECH API'],
    ['zoroApi-proxy', 'vtech-proxy'],
    ['Zoro Rest', 'VTECH'],
    ['Zoro REST', 'VTECH'],
    ['selectedApiCategory', 'selectedVtechCategory'],
    ['setSelectedApiCategory', 'setSelectedVtechCategory']
];

function renameFiles() {
    const renames = [
        ['src/api/universalApi.ts', 'src/api/universalVtech.ts'],
        ['src/data/apiRegistry.ts', 'src/data/vtechRegistry.ts'],
        ['src/data/apiEndpoints.fallback.ts', 'src/data/vtechEndpoints.fallback.ts'],
        ['src/data/apiEndpoints.generated.ts', 'src/data/vtechEndpoints.generated.ts'],
        ['src/api/zoroLlmRouter.ts', 'src/api/llmRouter.ts']
    ];

    for (const [oldPath, newPath] of renames) {
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed ${oldPath} -> ${newPath}`);
        }
    }
}

renameFiles();

// Now apply replacements to all standard text/tsx/ts files in src
walkDir('src', (filePath) => {
    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.json') || filePath.endsWith('.md')) {
        replaceInFile(filePath, replacements);
    }
});
// also .env.example
replaceInFile('.env.example', replacements);
replaceInFile('package.json', replacements);
replaceInFile('index.html', replacements);
