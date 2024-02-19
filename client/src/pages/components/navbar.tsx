import './navbar.css'
import logo from '../../assets/theflt.png'

function NavbarButton(props: any) {
    const isActive = props.isActive;

    return (
        <ul>
            <li><a href={props.href} className={isActive ? 'active' : ''}>{props.name}</a></li>
        </ul>
    );
}

function NavbarLogo(props: any) {
    return (
        <img src={logo} className='logo'/>
    )
}

function Navbar(props: any) {
    const currentRoute = props.currentRoute;

    return (
        <div className='navbar-container'>
            <div className='sub-container'>
                <NavbarButton href='/' name='HOME' isActive={currentRoute === '/'}/>
                <NavbarButton href='/' name='NEWS' isActive={currentRoute === '/news'}/>
            </div>
            <NavbarLogo/>
            <div className='sub-container'>
                <NavbarButton href='/' name='LOGIN' isActive={currentRoute === '/login'}/>
            </div>
        </div>
    )
}


export default Navbar;