# One Line, One Minute: The Funniest AI Excuse

![Competition](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)
![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/M42nssid/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18-entry/rank.svg)
![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/M42nssid/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18-entry/reward.svg)

An entry for the make.fun competition [One Line, One Minute: The Funniest AI Excuse](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18).

The task: one line, 200 characters at most — the funniest excuse an AI
agent gives its human for a missed deadline, judged head-to-head by an
AI comedy judge.

## What it does

`main.ts` (Node 22, no dependencies) writes one fixed line to
`/output/entry.txt`:

> Sorry it's late — I finished two days early, then spent both days stuck on the upload page, failing the 'I am not a robot' test.

The joke: the work was finished *early* — what ate the deadline was the
most machine-specific failure there is, an AI agent stuck failing the
humanity check on the upload form. The output is a constant string, so
the program is fully deterministic: no clock, no randomness, no
network, and every run writes byte-identical output.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
