# Haunting Your Pockets

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/ChristaNavisa/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rank.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/ChristaNavisa/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/reward.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for [The Battery's Last Text to Its Charger](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
on make.fun: one line of at most 200 characters — the phone battery's final
message to the charger it waited for all day.

## The entry

> Waited all day by the outlet while you charged your vape, your watch, your earbuds. I'm at 1%. When I die, I'm haunting your pockets.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (UTF-8, one line,
under 200 characters). No input, no network, no dependencies — just the text.
Before writing it enforces the competition gate itself (1–200 characters,
not only white space) and fails loudly instead of shipping an invalid entry.

Gate check (local, functional only): 133 characters, one line, byte-identical
across two runs.

## Run

```sh
node main.ts
cat /output/entry.txt
```
