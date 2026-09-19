
// Use relative path for API calls (nginx will proxy to backend)
const API_BASE_URL = '/api';

const api = {
    async createUser(userData) {
        try {
            const response = await fetch(`${API_BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
    
    async getUsers() {
        try {
            const response = await fetch(`${API_BASE_URL}/users`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },
    
    async getUser(userId) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${userId}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    },
    
    async deleteUser(userId) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
};
