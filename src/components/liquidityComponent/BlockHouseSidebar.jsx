// Images
// sideBar
import blockHouseLogo from "../../Images/liquidity/blockHouseLogo.png";
import sideBarNavHomeIcon from "../../Images/liquidity/sideBarNavHomeIcon.png";
import sideBarDealsIcon from "../../Images/liquidity/sideBarDealsIcon.png";
import sideBarAuctionIcon from "../../Images/liquidity/sideBarActionIcon.png";
import sideBarAuctionRightLockIcon from "../../Images/liquidity/sideBarAuctionRightLockIcon.png";
import sideBarProductsIcon from "../../Images/liquidity/sideBarProductsIcon.png";
import sideBarProductsDropDownIcon from "../../Images/liquidity/sideBarProductsDropDownIcon.png";
import sideBarLPIcon from "../../Images/liquidity/sideBarLPIcon.png";
import sideBarStructureIcon from "../../Images/liquidity/sideBarStructureIcon.png";
import sideBarLPIconNotActive from "../../Images/liquidity/sideBarLPIconNotActive.png";
import sideBarStructureIconActive from "../../Images/liquidity/sideBarStructureIconActive.png";

// css
import "../../css/blockHouseLiquidity.css";

function App(props) {
    // setTimeout(() => {
    //   if (props !== null) {
    //     if (props.activePageProp === "structured") {
    //       document.getElementById("structured").classList.add("sideBarNavItemActive")
    //     } else if (props.activePageProp === "lp") {
    //       document.getElementById("lp").classList.add("sideBarNavItemActive")
    //     }
    //   }
    // }, 1);

  return (
    <div className="siderbar">
      <img className="siderBarLogo" src={blockHouseLogo} alt="blockHouseLogo" />

      <div className="siderBarNavs">
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarNavHomeIcon} alt="sideBarNavHomeIcon" />
            <span>Home</span>
          </div>
        </div>
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarDealsIcon} alt="sideBarDealsIcon" />
            <span>Deals</span>
          </div>
          <div className="siderBarNavItemRightBox">
            <span>9</span>
          </div>
        </div>
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarAuctionIcon} alt="sideBarAuctionIcon" />
            <span>Auction</span>
          </div>
          <div className="siderBarNavItemRightBox">
            <span style={{ paddingLeft: "5px" }}>
              <img
                src={sideBarAuctionRightLockIcon}
                alt="sideBarAuctionRightLockIcon"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="siderBarNavs siderBarNavsSec">
        <div className="sideBarNavItem">
          <div>
            <img src={sideBarProductsIcon} alt="sideBarProductsIcon" />
            <span>Products</span>
          </div>
          <img
            style={{ position: "relative", left: "12px" }}
            src={sideBarProductsDropDownIcon}
            alt="sideBarProductsDropDownIcon"
          />
        </div>
        <div id="lp" className="sideBarNavItem">
          <div>
            {/* <img src={sideBarLPIcon} alt="sideBarLPIcon" /> */}
            <img src={sideBarLPIconNotActive} alt="sideBarLPIconNotActive" />
            <span style={{ color: "white" }}>LP</span>
          </div>
        </div>
        <div id="structured" className="sideBarNavItem sideBarNavItemActive">
          <div>
            <img src={sideBarStructureIconActive} alt="sideBarStructureIconActive" />
            {/* <img src={sideBarStructureIcon} alt="sideBarStructureIcon" /> */}
            <span>Structured</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
