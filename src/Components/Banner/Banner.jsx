import { useState } from "react"
import Modal from "./Modal"


const Banner = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="bg-[url(/bannerImg.avif)] h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center">
            <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-bold">Welcome to Our Platform</h1>
                <p className="text-lg md:text-xl font-semibold mt-2">Experience the best services with us.</p>
                <button onClick={() => setOpenModal(true)} className="px-4 py-2 mt-4 font-semibold bg-purple-700 rounded-md">Get Started</button>
                {
                    openModal && <Modal setOpenModal={setOpenModal} />
                }
            </div>
        </div>
    )
}
export default Banner