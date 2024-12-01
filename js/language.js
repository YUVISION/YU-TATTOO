document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'zh';

    function switchLanguage() {
        const zhElements = document.querySelectorAll('.lang-zh');
        const enElements = document.querySelectorAll('.lang-en');
        
        if (currentLang === 'zh') {
            // 切换到英文
            zhElements.forEach(el => el.classList.add('hidden'));
            enElements.forEach(el => el.classList.remove('hidden'));
            langToggle.textContent = '中';
            currentLang = 'en';
            document.documentElement.lang = 'en';
        } else {
            // 切换到中文
            enElements.forEach(el => el.classList.add('hidden'));
            zhElements.forEach(el => el.classList.remove('hidden'));
            langToggle.textContent = 'EN';
            currentLang = 'zh';
            document.documentElement.lang = 'zh-CN';
        }
    }

    // 添加点击事件监听器
    langToggle.addEventListener('click', switchLanguage);
}); 