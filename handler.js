'use strict';

import app from './src/index.ts';
import serverless from 'serverless-http';

export const hello = serverless(app);