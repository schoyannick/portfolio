/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
    const baseUrl = {
        development: 'http://localhost:5000',
        production: 'https://www-yscho.dev',
    }[process.env.NODE_ENV];

    const staticPages = fs
        .readdirSync('pages')
        .filter((staticPage) => ![
            '_app.js',
            '_document.js',
            '_error.js',
            'sitemap.xml.js',
            '/',
            '/skills',
            '/projects',
        ].includes(staticPage))
        .map((staticPagePath) => `${baseUrl}/${staticPagePath}`);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `)
        .join('')}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;