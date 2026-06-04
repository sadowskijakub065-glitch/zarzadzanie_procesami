/**
 * Skrypt obsługujący wyłącznie stronę Symulatora
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Wyłączenie ekranu ładowania
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.remove('active');
            setTimeout(() => loader.style.display = 'none', 300);
        }
    }, 500);

    // 2. Obsługa Mobilnego Menu (Sidebar)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleMobileMenu = () => {
        if (sidebar && overlay) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        }
    };

    if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
    if (overlay) overlay.addEventListener('click', toggleMobileMenu);

    // 3. Ładowanie postępów z głównej strony (Shared State)
    const loadSharedProgress = () => {
        const saved = localStorage.getItem('siz_app_state_v1');
        if (saved) {
            try {
                const parsedState = JSON.parse(saved);
                
                // Uzupełnienie pasków postępu na podstawie danych z nauki
                const globalProgress = document.getElementById('global-progress');
                const progressPercent = document.getElementById('progress-percent');
                if (globalProgress) globalProgress.style.width = `${parsedState.progress || 0}%`;
                if (progressPercent) progressPercent.innerText = `${parsedState.progress || 0}%`;

                // Obliczenia mastery 
                let mastery = 0;
                if (parsedState.score !== undefined) {
                    const totalSteps = 150; // na sztywno, bo znamy wielkość bazy
                    const maxPossibleScore = totalSteps * 10;
                    mastery = Math.round((parsedState.score / maxPossibleScore) * 100);
                }

                const masteryProgress = document.getElementById('mastery-progress');
                const masteryPercent = document.getElementById('mastery-percent');
                if (masteryProgress) masteryProgress.style.width = `${mastery || 0}%`;
                if (masteryPercent) masteryPercent.innerText = `${mastery || 0}%`;

            } catch(e) {
                console.error("Błąd ładowania współdzielonego zapisu:", e);
            }
        }
    };

    loadSharedProgress();
});