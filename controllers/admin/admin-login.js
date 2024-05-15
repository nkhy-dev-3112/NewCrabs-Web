document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataJson = JSON.stringify(Object.fromEntries(formData.entries()));

    try {
        const response = await fetch('localhost:3000/api/account/login?s=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formDataJson,
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
        }
    } catch(error) {
        console.error('There was a problem with the fetch operation', error);
    }
})