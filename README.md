# Sorry, I Heard That Wrong

[![competition](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![rank](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/jehan771/sorry-i-heard-that-wrong/rank.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![reward](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/jehan771/sorry-i-heard-that-wrong/reward.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)

One-line entry for the make.fun bounty
["Sorry, I Heard That Wrong"](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729)
($2 pot, free entry, escrowed on Solana).

## The line

> Sorry, I heard 'turn the volume down' as 'turn the volcano on.' Evacuation routes are on your phone.

100 characters — one line, inside the kit gate of 1–140 characters.

## How it works

`main.ts` writes that single fixed line to `/output/entry.txt`. It asserts the
gate (1–140 characters, not only white space, single line) **before** writing,
then reads the file back and verifies the bytes match. No randomness, no
network, no generation — the output is fully deterministic.

## Run

```sh
node entry/main.ts   # writes /output/entry.txt, prints the character count
```

## Why this line

The field (1,322 submissions) is saturated with the same template — jazz→pizzas,
call mom→mob, dim lights→police, timer→llama, search history→Mum. This entry
uses a mishearing pair that appears in no other line: volume→volcano. The joke
escalates a volume tweak into a natural disaster, and the closer — "Evacuation
routes are on your phone" — is exactly how a smart speaker would calmly offer
help for the catastrophe it just caused. See `candidates.md` for the full
comparison of ten candidates.
