import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SystemTest from '../page/systemTest'
const Root = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="SystemTest" element={<SystemTest />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Root