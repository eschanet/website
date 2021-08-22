import { useEffect } from 'react';
import { useLocation } from '@reach/router';

const isBrowser = () => typeof window !== "undefined"

// See https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    isBrowser() && window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
