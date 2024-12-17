import * as traceloop from "@traceloop/node-server-sdk";

traceloop.initialize({
  appName: "app",
  apiKey: process.env.TRACELOOP_API_KEY,
  baseUrl: process.env.TRACELOOP_BASE_URL,
  disableBatch: true,
  traceloopSyncEnabled: false,
});
