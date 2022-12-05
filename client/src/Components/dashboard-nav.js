import '../Assets/Styles/dashboard.css';

const DashboardNav = () => {
    return (
        <nav className="dashboard-nav">
            <div className="links">
                <a className="item-link-nav" href="/dashboard/:userId/create">CREATE A LISTING</a>
                <a className="item-link-nav" href="/dashboard/:userId/manage">MANAGE A LISTING</a>
                <a className="item-link-nav" href="/dashboard/:userId/favourites">♡ FAVOURITES</a>
                <a className="item-link-nav" href="/dashboard/:userId/messages">MY MESSAGES</a>
                <a className="item-link-nav" href="/dashboard/:userId/account">UPDATE ACCOUNT DETAILS</a>
            </div>
        </nav>
    );
}
 
export default DashboardNav;