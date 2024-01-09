document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function swichTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', swichTheme, false)
});

//メディアクエリのダークモード検出
window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
        localStorage.setItem('theme', 'light');
    }
});

