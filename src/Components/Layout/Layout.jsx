import Banner from "../Banner/Banner"
import PhotoGallery from "../DataFetching/DataFetching"
import Form from "../Form/Form"
import ReactHookForm from "../Form/ReactHookForm"
import Navbar from "../Navbar/Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Form />
            <ReactHookForm />
            <PhotoGallery />
        </>
    )
}
export default Layout