

const Dashboard = () => {
    const [currentComponent, setCurrentComponent] = useState("Create");

    const renderComponent = () => {
      if (currentComponent === "Create") {
        return <CreateListing />;
      }
      if (currentComponent === "Manage") {
        return <ManageListing />;
      }
      if (currentComponent === "Favourites") {
        return <Favourites />;
      }
      if (currentComponent === "Messages") {
        return <Messages />;
      }
      return <Account />;
    };
  
    const handleComponentChange = (component) => setCurrentComponent(component);
    return (  
        <div>
            <p>HOME / MY TRIGGER</p>
            <DashboardNav currentComponent={currentComponent} handleComponentChange={handleComponentChange} />
            {renderComponent()}
        </div>
    );
}
 
export default Dashboard;