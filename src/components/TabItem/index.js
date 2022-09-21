import "./index.css";

const TabItem = (props) => {
  const { tabDetails, displayTab, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const displayTabId = () => {
    displayTab(tabId);
  };

  const classNameForActiveTab = isActive ? "tab-btn active-tab-btn" : "";

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={displayTabId}
        className={`tab-btn ${classNameForActiveTab}`}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
