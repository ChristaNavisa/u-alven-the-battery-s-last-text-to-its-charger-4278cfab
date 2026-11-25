import { mkdirSync, writeFileSync } from "node:fs";

// The battery's last text to its charger: a spiteful farewell, not a sad one.
// It waited all day by the outlet while the charger served every other
// gadget first, so its final message is a haunting, not a goodbye.
const ENTRY =
  "Waited all day by the outlet while you charged your vape, your watch, your earbuds. I'm at 1%. When I die, I'm haunting your pockets.";

// Enforce the competition gate before writing: UTF-8 text, 1-200
// characters, not only white space. Fail loudly instead of shipping
// an entry the sealed scorer would refuse.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || !/\S/.test(ENTRY)) {
  throw new Error("entry fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
