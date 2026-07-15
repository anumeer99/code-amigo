import { useEffect } from 'react';

export default function useScrollToTop(deps = []) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, deps);
}
