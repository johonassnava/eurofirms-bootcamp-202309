const req = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'ma@nu.com', password: '123123123' })
}

fetch('http://localhost:4000/users/authenticate', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error.message))

            return
        }

        res.json()
            .then(body => console.log('user authenticated', body))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))