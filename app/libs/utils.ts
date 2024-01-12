export function throttle<T extends any[]>(
  func: (...args: T) => void,
  limit: number
) {
  let inThrottle = false;
  return function (this: any, ...args: T) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
