// Short Teams stress for `bun test`; the full gate is `bun run stress:teams` (5 seeds x 6000 ticks).
import { expect, test } from "bun:test";
import { countViolations, loadSetup, runModeSwitches, runTeamsStressSeed } from "./teams-stress";

const setup = await loadSetup();

test("teams: shared-territory invariants hold (1 seed x 2000 ticks)", () => {
  const result = runTeamsStressSeed(setup, 7919, 2000);
  expect(result.first).toEqual({});
  expect(countViolations(result)).toBe(0);
  expect(result.ticks).toBe(2000);
}, 30000);

test("mode switches classic <-> teams stop cleanly", () => {
  expect(runModeSwitches(setup).errors).toEqual([]);
}, 30000);
