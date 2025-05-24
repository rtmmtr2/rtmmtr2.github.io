const themes = ["light", "blue", "light-blue", "light-black"];

let currentThemeIndex = 0;

function toggleTheme() {
  // 先移除所有主题类
  themes.forEach(t => document.body.classList.remove(t));

  // 切换索引
  currentThemeIndex = (currentThemeIndex + 1) % (themes.length + 1); // +1是“无主题”状态

  if (currentThemeIndex === themes.length) {
    // 到了无主题，什么都不加
    localStorage.removeItem("theme");
  } else {
    // 添加对应主题类
    document.body.classList.add(themes[currentThemeIndex]);
    localStorage.setItem("theme", themes[currentThemeIndex]);
  }
}

// 页面加载时恢复主题
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && themes.includes(savedTheme)) {
    document.body.classList.add(savedTheme);
    currentThemeIndex = themes.indexOf(savedTheme);
  }
};