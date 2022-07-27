import React, {useState } from 'react'

        const [form, setForm] = useState({
            LoginName: '', Password: ''
        })
        const changeHandler = event => {
            setForm({ ...form, [event.target.name]: event.target.value })
        }

        function sendRecuest() {
            const headers = {
                'Content-Type': 'application/json'
            }
            return fetch('api/v1/signin', {
                method: 'POST',
                body: JSON.stringify({...form}),
                headers: headers
            }).then(response => {
                if (response.ok) {
                    return response.text()
                }
                authification = true
                return response.text().then(error => {
                    const e = new Error('ашыпка')
                    e.data = error
                    throw e
                })
            })
        }
    const body = {
        LoginName: "Spiderman",
        Password: "123"
    }
    sendRecuest('POST', recuestUrl, body)