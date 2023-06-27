export default function toMillisecond(time: string) {
	const regex = /^(\d+(?:\.\d+)?)(ms|s|m|h|d)$/
	const match = time.match(regex)

	if (!match) throw new Error('Invalid time string')

	const amount = parseFloat(match[1])
	const unit = match[2]

	let milliseconds

	switch (unit) {
		case 'ms':
			milliseconds = amount
			break
		case 's':
			milliseconds = amount * 1000 // 1 second = 1000 milliseconds
			break
		case 'm':
			milliseconds = amount * 60 * 1000 // 1 minute = 60 seconds * 1000 milliseconds
			break
		case 'h':
			milliseconds = amount * 60 * 60 * 1000 // 1 hour = 60 minutes * 60 seconds * 1000 milliseconds
			break
		case 'd':
			milliseconds = amount * 24 * 60 * 60 * 1000 // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
			break

		default:
			throw new Error('Invalid duration unit.')
	}

	return milliseconds
}
