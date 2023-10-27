const traceloop = require("@traceloop/node-server-sdk");
const sdk = require("@opentelemetry/sdk-trace-node");

traceloop.initialize({
  appName: "app",
  apiKey: process.env.TRACELOOP_API_KEY,
  baseUrl: "https://api.traceloop.com",
  disableBatch: true,
  exporter: new sdk.ConsoleSpanExporter(),
});
