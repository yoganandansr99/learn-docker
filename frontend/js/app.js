document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const usersList = document.getElementById('usersList');
    const notification = document.getElementById('notification');
    
    loadUsers();
    
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            education: document.getElementById('education').value,
            college: document.getElementById('college').value,
            location: document.getElementById('location').value,
        };
        
        try {
            await api.createUser(formData);
            showNotification('User added successfully!', 'success');
            userForm.reset();
            loadUsers();
        } catch (error) {
            showNotification('Failed to add user. Please try again.', 'error');
        }
    });
    
    async function loadUsers() {
        try {
            const users = await api.getUsers();
            displayUsers(users);
        } catch (error) {
            showNotification('Failed to load users. Make sure the backend is running.', 'error');
            usersList.innerHTML = '<div class="empty-state">Unable to load users. Please check your connection.</div>';
        }
    }
    
    function displayUsers(users) {
        if (users.length === 0) {
            usersList.innerHTML = '<div class="empty-state">No users registered yet. Add your first user!</div>';
            return;
        }
        
        usersList.innerHTML = users.map(user => `
            <div class="user-card">
                <div class="user-info">
                    <p><strong>Name:</strong> ${escapeHtml(user.name)}</p>
                    <p><strong>Education:</strong> ${escapeHtml(user.education)}</p>
                    <p><strong>College:</strong> ${escapeHtml(user.college)}</p>
                    <p><strong>Location:</strong> ${escapeHtml(user.location)}</p>
                </div>
                <div class="user-actions">
                    <button class="btn btn-danger" onclick="deleteUser('${user.id}')">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    window.deleteUser = async function(userId) {
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }
        
        try {
            await api.deleteUser(userId);
            showNotification('User deleted successfully!', 'success');
            loadUsers();
        } catch (error) {
            showNotification('Failed to delete user. Please try again.', 'error');
        }
    };
    
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        
        setTimeout(() => {
            notification.className = 'notification';
        }, 3000);
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
