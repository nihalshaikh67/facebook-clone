import React from 'react';
import './css/sidebar.css';
import Sidebaroption from './Sidebaroption';
import { useStateValue } from './Stateprovider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Sidebar = () => {
      const [{user},dispatch] = useStateValue();
    return (
        <div className="sidebar">
          
      
       <Sidebaroption src={user.photoURL} title={user.displayName}/>
       <Sidebaroption src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid 19 Information Center"/>
       <Sidebaroption src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends"/>
       <Sidebaroption src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups"/>
       <Sidebaroption src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch"/>
       <Sidebaroption src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title="Events"/>
       <Sidebaroption Icon =  {ExpandMoreIcon} title="See More"/>
        </div>
    )
}

export default Sidebar
