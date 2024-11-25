
async function customFetch(url, options = {}) {
    const refreshToken = localStorage.getItem('refresh_token');

    // Add Authorization header
    options.headers = {
        ...options.headers,
    };

    let response = await fetch(url, options);

    // If access token is expired, refresh it
    if (response.status === 401) {
        const refreshResponse = await fetch('/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: refreshToken })
        });

        if (refreshResponse.ok) {
            const refreshData = await refreshResponse.json();
            localStorage.setItem('access_token', refreshData.access_token);
            localStorage.setItem('refresh_token', refreshData.refresh_token);

            // Retry the original request with the new access token
            options.headers['Authorization'] = `Bearer ${refreshData.access_token}`;
            response = await fetch(url, options);
        } else {
            // Handle refresh token failure (e.g., redirect to login)
            console.error('Failed to refresh token');
            // Optionally, you can redirect to login page or handle it as per your requirement
        }
    }

    return response;
}
