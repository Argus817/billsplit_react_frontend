import { useState } from 'react'
import Navbar from '../components/Navbar'
import api from '../api/Axios'

const Home = () => {
    const [ msg, setMsg ] = useState('')
    
    const getMessage = async () => {
        try {
            const res = await api.get('/api/hello/')
            if (res.status === 200) {
                console.log(res.data)
                setMsg(res.data.message)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Navbar />
            <button onClick={getMessage}>Click me</button>
            <a>{msg}</a>
        </div>
    )
}

export default Home
