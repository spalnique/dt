import { ENV_VARS } from './constants';
import app from './server';
import env from './utils/env';

const PORT = env(ENV_VARS.PORT);

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
