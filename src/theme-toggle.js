const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');


function themeToggle() {

    bodyRef.classList.add(Theme.LIGHT);
    loadTheme();

    themeToggleRef.addEventListener('change', handleThemeToggle)

    function handleThemeToggle() {
        if (themeToggleRef.checked) {
            bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
            saveTheme();
            return;
        }

        if (!themeToggleRef.checked) {
            bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
            saveTheme();
            return;
        }
    }
    
    function saveTheme() {
        if (bodyRef.classList) {
            localStorage.setItem("theme", bodyRef.classList);
        }
    }

    function loadTheme() {  
        if (localStorage.theme) {
            const currentTheme = localStorage.getItem("theme");
            bodyRef.classList.add(currentTheme);
        }

        if (bodyRef.classList.contains(Theme.DARK)) { 
            bodyRef.classList.remove(Theme.LIGHT);
            themeToggleRef.checked = true;  
        }
    }
}

export default themeToggle;