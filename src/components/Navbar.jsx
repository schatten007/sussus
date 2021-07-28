import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({setLibDisplay, libDisplay}) => {
    return(
        <nav>
            <h1>SuSSuS</h1>
            <button onClick={()=>setLibDisplay(!libDisplay)}>
                <p>Library</p>
                <FontAwesomeIcon className="library-icon" icon={faMusic}/>
            </button>
        </nav>
    );
}

export default Navbar;