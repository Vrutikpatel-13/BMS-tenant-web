// Utility functions for BMS Tenant Web

// Theme Management
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-success text-white' :
        type === 'error' ? 'bg-error text-white' :
        type === 'warning' ? 'bg-warning text-white' :
        'bg-primary text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Loading state
function setLoading(element, loading = true) {
    if (loading) {
        element.disabled = true;
        element.dataset.originalText = element.textContent;
        element.textContent = 'Loading...';
        element.classList.add('opacity-75');
    } else {
        element.disabled = false;
        element.textContent = element.dataset.originalText;
        element.classList.remove('opacity-75');
    }
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// API helpers (mock for now)
async function apiCall(endpoint, method = 'GET', data = null) {
    // Mock API call - replace with actual API implementation
    console.log(`API Call: ${method} ${endpoint}`, data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response
    return {
        success: true,
        data: data || { message: 'Success' }
    };
}

// Toggle switch functionality
function initToggleSwitches() {
    const toggles = document.querySelectorAll('[role="switch"]');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isChecked = this.getAttribute('aria-checked') === 'true';
            const newState = !isChecked;
            
            // Update aria-checked attribute
            this.setAttribute('aria-checked', newState);
            
            // Update visual state
            const span = this.querySelector('span');
            if (newState) {
                // Turn on
                this.classList.remove('bg-gray-200', 'dark:bg-gray-600');
                this.classList.add('bg-primary');
                span.classList.remove('translate-x-0');
                span.classList.add('translate-x-5');
                
                // Enable dependent toggles if this is a master toggle
                enableDependentToggles(this);
            } else {
                // Turn off
                this.classList.remove('bg-primary');
                this.classList.add('bg-gray-200', 'dark:bg-gray-600');
                span.classList.remove('translate-x-5');
                span.classList.add('translate-x-0');
                
                // Disable dependent toggles if this is a master toggle
                disableDependentToggles(this);
            }
            
            // Save preference
            saveTogglePreference(this, newState);
            
            // Show notification
            const label = this.getAttribute('aria-label') || this.previousElementSibling?.textContent || 'Toggle';
            showNotification(`${label} ${newState ? 'enabled' : 'disabled'}`, 'success');
        });
    });
}

// Enable dependent toggles (for master channel toggles)
function enableDependentToggles(masterToggle) {
    const toggleId = masterToggle.id;
    if (toggleId === 'push-toggle' || toggleId === 'email-toggle' || toggleId === 'sms-toggle') {
        const channel = toggleId.replace('-toggle', '');
        const dependentToggles = document.querySelectorAll(`[aria-label*="${channel}"]`);
        
        dependentToggles.forEach(toggle => {
            if (toggle !== masterToggle) {
                toggle.classList.remove('opacity-40', 'cursor-not-allowed');
                toggle.disabled = false;
            }
        });
    }
}

// Disable dependent toggles (for master channel toggles)
function disableDependentToggles(masterToggle) {
    const toggleId = masterToggle.id;
    if (toggleId === 'push-toggle' || toggleId === 'email-toggle' || toggleId === 'sms-toggle') {
        const channel = toggleId.replace('-toggle', '');
        const dependentToggles = document.querySelectorAll(`[aria-label*="${channel}"]`);
        
        dependentToggles.forEach(toggle => {
            if (toggle !== masterToggle) {
                toggle.classList.add('opacity-40', 'cursor-not-allowed');
                toggle.disabled = true;
                // Turn off dependent toggles
                toggle.setAttribute('aria-checked', 'false');
                const span = toggle.querySelector('span');
                toggle.classList.remove('bg-primary');
                toggle.classList.add('bg-gray-200', 'dark:bg-gray-600');
                span.classList.remove('translate-x-5');
                span.classList.add('translate-x-0');
            }
        });
    }
}

// Save toggle preference to localStorage
function saveTogglePreference(toggle, state) {
    const toggleId = toggle.id || toggle.getAttribute('aria-label');
    if (toggleId) {
        const key = `toggle_${toggleId}`;
        localStorage.setItem(key, state);
    }
}

// Load toggle preferences from localStorage
function loadTogglePreferences() {
    const toggles = document.querySelectorAll('[role="switch"]');
    
    toggles.forEach(toggle => {
        const toggleId = toggle.id || toggle.getAttribute('aria-label');
        if (toggleId) {
            const key = `toggle_${toggleId}`;
            const savedState = localStorage.getItem(key);
            
            if (savedState !== null) {
                const state = savedState === 'true';
                
                // Update aria-checked attribute
                toggle.setAttribute('aria-checked', state);
                
                // Update visual state
                const span = toggle.querySelector('span');
                if (state) {
                    toggle.classList.remove('bg-gray-200', 'dark:bg-gray-600');
                    toggle.classList.add('bg-primary');
                    span.classList.remove('translate-x-0');
                    span.classList.add('translate-x-5');
                } else {
                    toggle.classList.remove('bg-primary');
                    toggle.classList.add('bg-gray-200', 'dark:bg-gray-600');
                    span.classList.remove('translate-x-5');
                    span.classList.add('translate-x-0');
                }
            }
        }
    });
    
    // Apply master toggle states to dependent toggles
    const masterToggles = ['push-toggle', 'email-toggle', 'sms-toggle'];
    masterToggles.forEach(id => {
        const masterToggle = document.getElementById(id);
        if (masterToggle && masterToggle.getAttribute('aria-checked') === 'true') {
            enableDependentToggles(masterToggle);
        } else if (masterToggle) {
            disableDependentToggles(masterToggle);
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    
    // Add dark mode toggle listener if element exists
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Initialize toggle switches
    initToggleSwitches();
    loadTogglePreferences();
});
