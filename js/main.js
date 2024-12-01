document.addEventListener('DOMContentLoaded', function() {
    // 微信二维码功能
    const wechatLink = document.querySelector('.wechat-link');
    const wechatQR = document.querySelector('.wechat-qr');
    
    if (wechatLink && wechatQR) {
        wechatLink.addEventListener('click', function(e) {
            e.preventDefault();
            wechatQR.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!wechatLink.contains(e.target)) {
                wechatQR.classList.remove('active');
            }
        });
    }

    // 作品展示区域滚动功能
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    if (portfolioGrid) {
        let isMouseOver = false;
        let mouseX = 0;
        let scrollInterval;

        portfolioGrid.addEventListener('mousemove', function(e) {
            if (!isMouseOver) return;
            
            const rect = portfolioGrid.getBoundingClientRect();
            const mousePosition = e.clientX - rect.left;
            const threshold = rect.width * 0.2; // 20% 的区域用于触发滚动
            
            clearInterval(scrollInterval);
            
            if (mousePosition < threshold) {
                // 左侧滚动
                scrollInterval = setInterval(() => {
                    portfolioGrid.scrollLeft -= 5;
                }, 16);
            } else if (mousePosition > rect.width - threshold) {
                // 右侧滚动
                scrollInterval = setInterval(() => {
                    portfolioGrid.scrollLeft += 5;
                }, 16);
            }
        });

        portfolioGrid.addEventListener('mouseenter', function() {
            isMouseOver = true;
        });

        portfolioGrid.addEventListener('mouseleave', function() {
            isMouseOver = false;
            clearInterval(scrollInterval);
        });
    }
}); 