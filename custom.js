(function () {
    const settings = {
        timeout: 100,
        mediaTabName: "Volo.nas",
        emporerTabName: "Emporer.net",
        mediaStackSelector: "#layout-groups .services-group:nth-child(3) .grid > .services-group:first-child"
    };
    
    function onTabClick(event) {
        const tabName = event.target.textContent.trim();
        if (tabName === settings.mediaTabName) {
            applyMediaStackStyles();
        }
        if (tabName === settings.emporerTabName) {
            applyEmporerNetStyles();
        }
    }

    function applyMediaStackStyles() {
        setTimeout(() => {
            const mediaStack = document.querySelector(settings.mediaStackSelector);
            if (mediaStack) {
                mediaStack.style.gridColumn = "span 2";
            } else {
                console.warn("Media Stack element not found.");
            }
        }, settings.timeout);
    }

    function applyEmporerNetStyles() {
        setTimeout(() => {
        }, settings.timeout);
    }

    setTimeout(() => {
        const tabs = document.querySelectorAll('[role="tab"]');
        tabs.forEach(tab => {
            tab.addEventListener("click", onTabClick);
        });
    }, settings.timeout);

    activeTab = document.querySelector('[role="tab"][aria-selected="true"]');
    if (activeTab) {
        if (activeTab.textContent.trim() === settings.mediaTabName) {
            applyMediaStackStyles();
        }
        if (activeTab.textContent.trim() === settings.emporerTabName) {
            applyEmporerNetStyles();
        }
    }
}());