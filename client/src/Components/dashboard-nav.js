import '../Assets/Styles/dashboard.css';

const DashboardNav = ({ currentComponent, handleComponentChange }) => {
    return (
        <nav className="dashboard-nav">
            <div className="links">
                <a className="item-link-nav" href="/dashboard/:userId/create" onClick={() => handleComponentChange('Create')}>CREATE A LISTING</a>
                <a className="item-link-nav" href="/dashboard/:userId/manage" onClick={() => handleComponentChange('Manage')}>MANAGE A LISTING</a>
                <a className="item-link-nav" href="/dashboard/:userId/favourites" onClick={() => handleComponentChange('Favourites')}>♡ FAVOURITES</a>
                <a className="item-link-nav" href="/dashboard/:userId/messages" onClick={() => handleComponentChange('Messages')}>MY MESSAGES</a>
                <a className="item-link-nav" href="/dashboard/:userId/account" onClick={() => handleComponentChange('Account')}>UPDATE ACCOUNT DETAILS</a>
            </div>
        </nav>
    );
}
 
export default DashboardNav;