import Home from '@/app/Home'
import Layout from './layouts/Layout'


const HomePage = () => {
    return (
        <main>
            <Home />
        </main>
    )
}

HomePage.getLayout = Layout;

export default HomePage;