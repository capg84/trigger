import '../Assets/Styles/dashboard.css';

const DashboardNav = ({ currentComponent, handleComponentChange }) => {
    return (
        <nav className="dashboard-nav">
            <div className="links">
                <a className="item-link-nav" href="#Create" onClick={() => handleComponentChange('Create')}>CREATE A LISTING</a>
                <a className="item-link-nav" href="#Manage" onClick={() => handleComponentChange('Manage')}>MANAGE A LISTING</a>
                <a className="item-link-nav" href="#Favourites" onClick={() => handleComponentChange('Favourites')}>♡ FAVOURITES</a>
                <a className="item-link-nav" href="#Messages" onClick={() => handleComponentChange('Messages')}>MY MESSAGES</a>
                <a className="item-link-nav" href="#Account" onClick={() => handleComponentChange('Account')}>UPDATE ACCOUNT DETAILS</a>
            </div>
        </nav>
    );
}
 
export default DashboardNav;