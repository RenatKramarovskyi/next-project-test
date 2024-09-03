import './Navbar.css'

const Navbar = () => {

    return (
        <div>
            <div className={"navbar"}>
                <a className={  "navbar_links exit clickable"}>EXIT</a>
                <div  className={"navbar_links"}>POSTS</div>
                <div className={"navbar_links"}>ABOUT</div>
            </div>
        </div>
    );
};

export default Navbar;