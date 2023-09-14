import { EventEmitter } from '@splitscript.js/core'
import toMillisecond from './utils/toMs.js'

/** Look for schedules in the functions/scheduler folder and run them */
async function start() {
	const emitter = new EventEmitter('scheduler', '@splitscript.js/scheduler', [
		'1m',
		'1h',
		'1d'
	])

	const listeners = await emitter.listeners()

	for (let listener of listeners) {
		const name = listener.event[0]
		if (!name) continue
		try {
			const ms = toMillisecond(name)
			if (ms > 2147483647) break
			setInterval(() => {
				emitter.send(listener.event, {})
			}, ms)
		} catch {
			console.log('invalid', listener.event.join(' '))
			continue
		}
	}
}

/** Run a function in the future
 *
 * | unit | ms 		| s 		|
 * | :-   | :----------- | :------ |
 * | `s`  | `1,000` 	| `1` 	|
 * | `m` 	| `60,000` 	| `60`	|
 * | `h` 	| `3,600,000`	| `3,600` |
 * | `d` 	| `86,400,000`	| `86,400`|
 */
async function schedule(time: string, func: () => any) {
	const ms = toMillisecond(time)
	if (ms > 2147483647)
		throw new Error("Time can't be longer than 2147483647 milliseconds")
	setTimeout(func, ms)
}

export { schedule, start }
export default { start, schedule }
