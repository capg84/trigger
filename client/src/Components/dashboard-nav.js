const DashboardNav = ({ currentComponent, handleComponentChange }) => {
    return (  
        <nav className="dashboard-nav">
            <div className="links">
                <a className="item-link" href="#Create" onClick={() => handleComponentChange('Create')}>CREATE A LISTING</a>
                <a className="item-link" href="#Manage" onClick={() => handleComponentChange('Manage')}>MANAGE A LISTING</a>
                <a className="item-link" href="#Favourites" onClick={() => handleComponentChange('Favourites')}>♡ FAVOURITES</a>
                <a className="item-link" href="#Messages" onClick={() => handleComponentChange('Messages')}>MY MESSAGES</a>
                <a className="item-link" href="#Account" onClick={() => handleComponentChange('Account')}>UPDATE ACCOUNT DETAILS</a>
            </div>
        </nav>
    );
}
 
export default DashboardNav;