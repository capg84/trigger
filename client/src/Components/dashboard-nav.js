const DashboardNav = ({ currentComponent, handleComponentChange }) => {
    return (  
        <nav className="dashboard-nav">
            <div className="links">
                <a className="item-link" href="#Home" onClick={() => handleComponentChange('Create')}>CREATE A LISTING</a>
                <a className="item-link" href="#Portfolio" onClick={() => handleComponentChange('Manage')}>MANAGE A LISTING</a>
                <a className="item-link" href="#Experience" onClick={() => handleComponentChange('Favourites')}>♡ FAVOURITES</a>
                <a className="item-link" href="#Contact" onClick={() => handleComponentChange('Messages')}>MY MESSAGES</a>
                <a className="item-link" href="#Contact" onClick={() => handleComponentChange('Account')}>UPDATE ACCOUNT DETAILS</a>
            </div>
        </nav>
    );
}
 
export default DashboardNav;