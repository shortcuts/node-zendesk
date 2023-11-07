export = throttle;
/**
 * Creates a throttled function that limits the rate of execution of the provided function.
 * The throttled function ensures that the wrapped function is not invoked more frequently
 * than a specified time interval.
 * @param {...any} args - The arguments for the throttled function. This can include:
 *   - {Function} fn: The function to be throttled.
 *   - {object} [options]: Throttling options.
 *     - {number|string} [options.interval]: The time interval in milliseconds between function calls.
 *     - {number} [options.window=1]: The sliding window duration in which 'limit' number of calls are allowed.
 *     - {number} [options.limit=1]: The maximum number of function calls allowed in the specified window.
 *   - {...any} additionalArgs: Additional arguments to be passed to the throttled function.
 * @returns {Function} - A throttled function that queues and limits the execution of the original function.
 * @example
 * const throttledLog = throttle(console.log, 1000); // Throttle to at most 1 call per second
 * throttledLog('Message 1'); // Logs 'Message 1'
 * throttledLog('Message 2'); // Queues 'Message 2' to be logged after the throttle interval
 * @example
 * const throttledFetch = throttle(fetch, { window: 5, limit: 2 }); // Throttle to at most 2 calls in every 5 seconds
 * throttledFetch('https://api.example.com/data1'); // Fetches data1
 * throttledFetch('https://api.example.com/data2'); // Fetches data2
 * throttledFetch('https://api.example.com/data3'); // Queues data3 to be fetched after the throttle interval
 *
 * Credit: Original inspiration from https://github.com/brianloveswords/throttle-function "Brian J Brennan" <brianloveswords@gmail.com>
 */
declare function throttle(...args: any[]): Function;
