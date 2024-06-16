import { useEffect } from 'react';
import { useDarkLightMode } from './DarkLightMode';

function FavIcon() {
  const darkMode = useDarkLightMode();

  useEffect(() => {
    const favicon = document.getElementById('favicon');

    if (!favicon) return; // Ensure favicon element exists

    if (darkMode) {
      favicon.href = '/i-prefer-app/assets/IPAppIconLogoDarkMode.png'; // Set dark mode favicon
    } else {
      favicon.href = '/i-prefer-app/assets/IPAppIconLogoLightMode-Bmtyc7Qq.png'; // Set light mode favicon
    }
  }, [darkMode]);

  return null;
}

export default FavIcon;
