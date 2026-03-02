// JavaScript بۆ وێبسایتی بڵاوکردنەوەی یاری و ئەپ

// داتای یاری و ئەپەکان - دەتوانیت بە ئاسانی زیاد بکەیت یان لە API وەریبگریت
const appData = {
    updateGames: [
        { name: "Melon Sandbox", version: "34.5", mod: "No Ads, Free Shopping", downloads: "15k", size: "98 MB" },
        { name: "State Connect", version: "1.180", mod: "Free Reward", downloads: "8k", size: "72 MB" },
        { name: "My Tiny Tower", version: "0.7.9", mod: "Money", downloads: "22k", size: "115 MB" },
        { name: "Gladiators: Survival", version: "1.37.1", mod: "Free Reward, God Mode", downloads: "31k", size: "210 MB" },
        { name: "Grand Hotel Mania", version: "4.17.10.7", mod: "Free Shopping", downloads: "45k", size: "156 MB" },
        { name: "Good Coffee", version: "1.14.2.2", mod: "Free Money", downloads: "12k", size: "88 MB" }
    ],
    ongoingGames: [
        { name: "kaihi", version: "1.1.0", mod: null, downloads: "5k", size: "45 MB" },
        { name: "Crash Drive 3", version: "1.0.8.5", mod: "Free Money", downloads: "18k", size: "230 MB" },
        { name: "Subway Princess", version: "8.5.0", mod: "Money", downloads: "120k", size: "95 MB" },
        { name: "Stickman Great War", version: "0.5.6", mod: "Free Money", downloads: "27k", size: "135 MB" },
        { name: "Kitaria Fables", version: "1.21b22", mod: "Unlocked Full", downloads: "9k", size: "680 MB" },
        { name: "Adore", version: "1.0.0", mod: null, downloads: "2k", size: "310 MB" }
    ]
};

// فانکشنی دروستکردنی کارتی یاری/ئەپ
function createAppCard(item) {
    const modBadge = item.mod ? `<span class="app-mod">${item.mod}</span>` : '';
    const iconName = item.name.toLowerCase().includes('game') ? 'fa-gamepad' : 'fa-mobile-alt';
    
    return `
        <div class="app-card">
            <div class="app-icon-placeholder">
                <i class="fas ${iconName}"></i>
            </div>
            <h3>${item.name}</h3>
            <div class="app-version">وەشان: ${item.version}</div>
            ${modBadge}
            <div class="app-meta">
                <span><i class="fas fa-download"></i> ${item.downloads}</span>
                <span><i class="fas fa-database"></i> ${item.size}</span>
            </div>
            <a href="#" class="download-btn">
                <i class="fas fa-cloud-download-alt"></i> داگرتن
            </a>
        </div>
    `;
}

// بارکردنی کارتەکان کە پەڕەکە بار دەبێت
document.addEventListener('DOMContentLoaded', function() {
    // بارکردنی یارییە نوێیەکان
    const updateContainer = document.getElementById('update-games-container');
    if (updateContainer) {
        updateContainer.innerHTML = appData.updateGames.map(createAppCard).join('');
    }
    
    // بارکردنی یارییە بەردەوامەکان
    const ongoingContainer = document.getElementById('ongoing-games-container');
    if (ongoingContainer) {
        ongoingContainer.innerHTML = appData.ongoingGames.map(createAppCard).join('');
    }
    
    // کاردانەوەی سەر کلیکی مۆبایل مێنیو
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
            // ڕێکخستنی تەواو بۆ مۆبایل
            if (mainNav.style.display === 'block') {
                mainNav.style.position = 'absolute';
                mainNav.style.top = '70px';
                mainNav.style.right = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = 'white';
                mainNav.style.padding = '20px';
                mainNav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                mainNav.style.zIndex = '99';
                
                const ul = mainNav.querySelector('ul');
                if (ul) {
                    ul.style.flexDirection = 'column';
                    ul.style.alignItems = 'center';
                    ul.style.gap = '15px';
                }
            } else {
                mainNav.style = '';
                const ul = mainNav.querySelector('ul');
                if (ul) {
                    ul.style = '';
                }
            }
        });
    }
    
    // کاردانەوەی فۆرمی هەواڵنامه
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`زۆر سوپاس ${emailInput.value}، ئێستا تۆ لە لیستی ئاگادارکردنەوەدایت.`);
                emailInput.value = '';
            } else {
                alert('تکایە ئیمەیلەکەت بنوسە.');
            }
        });
    }
    
    // زیادکردنی کاریگەری سکرۆڵ بۆ لینکەکان (بە نەرمی)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // گۆڕینی ڕەنگی header کاتێک سکرۆڵ دەکەیت
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.03)';
                header.style.backgroundColor = '#ffffff';
                header.style.backdropFilter = 'none';
            }
        }
    });
});