// Responsive content centering
document.addEventListener('DOMContentLoaded', function() {
    const contentWrapper = document.querySelector('.content-wrapper');
    const postsContent = document.querySelector('.posts-content');
    
    if (!contentWrapper || !postsContent) return;
    
    function adjustContentCentering() {
        const viewportHeight = window.innerHeight;
        const contentHeight = postsContent.offsetHeight;
        const navHeight = document.querySelector('.horizontal-nav')?.offsetHeight || 0;
        const availableHeight = viewportHeight - navHeight - 120; // Account for padding
        
        // If content is taller than 70% of available space, disable centering
        if (contentHeight > availableHeight * 0.7) {
            contentWrapper.classList.add('large-content');
        } else {
            contentWrapper.classList.remove('large-content');
        }
    }
    
    // Run on load and resize
    adjustContentCentering();
    window.addEventListener('resize', adjustContentCentering);
    
    // Run after a short delay to ensure all content is loaded
    setTimeout(adjustContentCentering, 100);
});