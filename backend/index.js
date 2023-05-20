const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put('https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "dd7e103f-bbf4-454b-9db7-6c957643c7c0" } }
        );
        return res.status(r.status).json(r.data)

    } catch (e) {
        res.status(e.response.status).json(r.data);
    }

    return res.json({ username: username, secret: 'leo123...' });

});

app.listen(3001);