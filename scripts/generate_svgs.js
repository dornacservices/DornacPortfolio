import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '../src/assets/images');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const colors = [
    '#A78BFA', '#EC4899', '#38BDF8', '#FDE68A', '#FCA5A5', '#C4B5FD', '#DDD6FE', '#FECACA', '#BAE6FD', '#C7D2FE'
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const generateAbstractSVG = (width, height, name) => {
    const bg = '#F8F6FF'; // Solid light background
    const accent = getRandomColor();
    let shapes = '';

    // Add 5-10 random shapes
    const shapeCount = 5 + Math.floor(Math.random() * 5);
    for (let i = 0; i < shapeCount; i++) {
        const type = Math.random() > 0.5 ? 'circle' : 'rect';
        const fill = getRandomColor();
        const opacity = 0.3 + Math.random() * 0.5;

        if (type === 'circle') {
            const cx = Math.random() * width;
            const cy = Math.random() * height;
            const r = 20 + Math.random() * 100;
            shapes += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" fill-opacity="${opacity}" />`;
        } else {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const w = 50 + Math.random() * 150;
            const h = 50 + Math.random() * 150;
            const rotate = Math.random() * 360;
            shapes += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" fill-opacity="${opacity}" transform="rotate(${rotate}, ${x + w / 2}, ${y + h / 2})" />`;
        }
    }

    // Add text label
    const fontSize = Math.min(width, height) / 12;
    const cleanName = name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    const text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="${fontSize}" fill="#333" fill-opacity="0.8">${cleanName}</text>`;

    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${bg}" />
        <rect width="100%" height="100%" fill="${accent}" fill-opacity="0.05" />
        ${shapes}
        ${text}
    </svg>`;
};

const images = [
    // Blog
    'blog-design-conversion.svg',
    'blog-performance-vitals.svg',
    'blog-branding-startup.svg',

    // Team
    'team-alex-morgan.svg',
    'team-sarah-lee.svg',
    'team-david-kim.svg',
    'team-elena-rossi.svg',

    // Services
    'service-web-design.svg',
    'service-web-dev.svg',
    'service-branding.svg',
    'service-product-design.svg',

    // Projects
    'project-nexacommerce.svg',
    'project-urbanflow.svg',
    'project-medisync.svg',
    'project-learnify.svg'
];

console.log('Generating SVG images...');

images.forEach(img => {
    const svgContent = generateAbstractSVG(800, 600, img.replace('.svg', ''));
    const filePath = path.join(targetDir, img);
    fs.writeFileSync(filePath, svgContent);
    console.log(`Generated ${img}`);
});

console.log('Done.');
