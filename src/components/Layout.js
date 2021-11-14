import { Navbar } from './Navbar'

export const Layout = ({children})  => {
    return (
        <div>
           <Navbar/>
           {children}
        </div>
    )
}
export default Layout;