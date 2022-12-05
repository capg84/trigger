import '../Assets/Styles/dashboard.css';

const DashboardNav = ({ currentComponent, handleComponentChange }) => {
    return (
        <nav className="dashboard-nav">
            <div className="links" style={{ width:"100%", display: "flex", flexWrap: "wrap", textAlign: "center" }}>
                <a className="item-link-nav" href="#Create" onClick={() => handleComponentChange('Create')}
                style={{width:"39.5vh"}}>CREATE A LISTING</a>
                <a className="item-link-nav" href="#Manage" onClick={() => handleComponentChange('Manage')}
                style={{width:"39.5vh"}} >MANAGE A LISTING</a>
                <a className="item-link-nav" style={{width:"39.5vh", textAlign: "centre"}} 
                href="#Favourites" onClick={() => handleComponentChange('Favourites')}>♡ FAVOURITES</a>
                <a className="item-link-nav" href="#Messages" onClick={() => handleComponentChange('Messages')}
                style={{width:"39.5vh"}}>MY MESSAGES</a>
                <a className="item-link-nav" href="#Account" onClick={() => handleComponentChange('Account')}
                style={{width:"39.5vh"}}>UPDATE ACCOUNT DETAILS</a>
            </div>
        </nav>
    );
}
 
export default DashboardNav;