import './navbar.css'

function NavbarButton(props: any) {
    return (
        <ul>
            <li><a href={props.href}>{props.name}</a></li>
        </ul>
    );
}

function NavbarLogo(props: any) {
    return (
        <image>

        </image>
    )
}

function Navbar(props: any) {
    return (
        <div className='navbar-container'>
            <NavbarButton href='/' name='HOME'/>
            <NavbarLogo/>
        </div>
    )
}


export default Navbar;