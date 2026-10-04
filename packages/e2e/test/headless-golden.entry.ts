// Bundle entry for headless-golden.test.ts: exposes core's golden scenario on window.
import { runGoldenScenario } from "../../core/test/golden-scenario";

Object.assign(globalThis, { runGoldenScenario });
