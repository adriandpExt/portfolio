export const toggleDarkTheme = (isDarkMode: boolean) => {
  return isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800";
};

export const toggleLightTheme = (isDarkMode: boolean) => {
  return isDarkMode ? "bg-gray-200 text-gray-800" : "bg-gray-900 text-white";
};

export const handleToggleDropIcon = (isDarkMode: boolean) => {
  return isDarkMode ? "bg-gray-200  text-gray-800" : "bg-gray-900  text-white";
};
