<a href="https://www.npmjs.com/package/@splitscript.js/scheduler" align="">

![](https://i.imgur.com/VDZDsa2.png)

</a>

<div align="center">

Package for scheduling events

[![install size](https://packagephobia.com/badge?p=@splitscript.js/scheduler)](https://packagephobia.com/result?p=@splitscript.js/scheduler) [![downloads](https://img.shields.io/npm/dm/@splitscript.js/scheduler?color=90ee90&style=flat)](https://www.npmjs.com/package/@splitscript.js/scheduler)

<a href='https://splitscript.js.org/scheduler' style='text-decoration:none;'>

<img src='https://i.imgur.com/8PqPYu0.png' alt='docs' height='100px'>

</a>

</div>

## About

This package is part of [SplitScript.js, the everything framework](https://splitscript.js.org)

It is used for scheduling events

## Install

```bash
$ npm i '@splitscript.js/scheduler'
```

## Usage

### Times

| unit | ms         | s      |
| :--- | :--------- | :----- |
| s    | 1,000      | 1      |
| m    | 60,000     | 60     |
| h    | 3,600,000  | 3,600  |
| d    | 86,400,000 | 86,400 |

E.g `10m` would mean 600 seconds or 600,000 ms
You can also use decimals, so `0.5m` would be half a minute, or 30 seconds

> ⚠ There is a maximum of `2,147,483,647ms`

### Start scheduling

```js
import scheduler from '@splitscript.js/scheduler'

scheduler.start()
```

### Create a scheduler

Create a file in your functions/scheduler folder like...

```
functions/
	scheduler/
		0.5m - 30 seconds
		1s - every second
		1h - hourly
		1d - daily
```

And export a function:

```ts
export default function () {
	console.log('this is a scheduled event')
}
// or
module.exports = async function () {
	console.log('this is a scheduled event')
}
```

### Schedule once

```ts
import scheduler from '@splitscript.js/scheduler'

scheduler.schedule(time, () => {
	// do someting
})
```

For more, go to [the docs](https://splitscript.js.org/scheduler)

<div align="center">

<sub><code>v1.0.2</code> | by [ultraviolet](https://github.com/ultravioletasdf)</sub>

</div>
