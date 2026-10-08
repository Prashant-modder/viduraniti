import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  server: {
    port: 80,         // Changes the port back to default HTTP
    host: true,
    allowedHosts: ['viduraniti']

  }
});