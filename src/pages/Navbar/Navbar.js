import { useResolvedPath,useMatch,Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar(){
    return (<>
        <nav className="nav">
            <CustomLink  to="/addnote">თანამშრომლის ინფო</CustomLink>
            <CustomLink to="/laptopspecs">ლეპტოპის მახასიათებლები</CustomLink>
        </nav>
        </>
    )
}

function CustomLink({children,to,...props}){
    const resolved = useResolvedPath(to)
    const isActive = useMatch({path:resolved.pathname})
    return(
        <li className={isActive?'active':''}>
            <Link to={to}{...props} >{children}</Link>
        </li>
    )
}