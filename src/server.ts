import 'dotenv/config';

import { createApp } from './app.js';

const app = createApp();
const PORT = Number(process.env.PORT ?? 3000);

app.listen(PORT, () => {
  console.log(`[server] running at http://localhost:${PORT}`);
});
