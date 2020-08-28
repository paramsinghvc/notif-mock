export function throttle(fn: (...args: any[]) => any, time: number) {
  let isThrottled = false;
  return (...args: any[]) => {
    if (!isThrottled) {
      isThrottled = true;
      fn(...args);
      setTimeout(() => {
        isThrottled = false;
      }, time);
    }
  };
}
