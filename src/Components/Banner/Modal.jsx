const Modal = ({setOpenModal}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                <h1 className="text-3xl font-bold">Modal</h1>
                <p className="mt-2 text-xl font-semibold">This is a Modal</p>
                <button onClick={() => setOpenModal(false)} className="mt-5 px-4 py-2 bg-purple-500 rounded-md">Close</button>
            </div>
        </div>
    )
}
export default Modal