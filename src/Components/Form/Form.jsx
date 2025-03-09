import { useState } from "react"



const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form:', formData)
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <form
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" 
            onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-gray-700 text-center"> Register</h2>
                <div>
                    <label>Name</label>
                    <input 
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type your name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type your email" required />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Type your password" required />
                </div>
                <button 
                className="w-full mt-4 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form