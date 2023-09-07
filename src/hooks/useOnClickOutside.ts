import { RefObject, useEffect } from 'react';

interface Input {
  refs: Array<RefObject<HTMLDivElement | HTMLUListElement>>;
  handler: (event: MouseEvent | TouchEvent) => void;
  isOpen: boolean;
}

function useOnClickOutside({ refs, handler, isOpen }: Input): void {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      const { target } = event;

      if (
        target instanceof Node
        && refs.some(({ current }) => current && current.contains(target))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler, isOpen]);
}

export default useOnClickOutside;
