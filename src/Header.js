import React from 'react';
import './css/header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupIcon from '@material-ui/icons/Group';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import { useStateValue } from './Stateprovider';


const Header = () => {
  
    const [{user},dispatch] = useStateValue();
     
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsw9CgWug-VYyGVR09d-2IQcEsFGdyQ_IZCerlfgvoFk1zMXR9Q63qQrMjd-mIZO8FPpc&usqp=CAU" alt="pic" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="search facebook" />
                </div>

            </div>

            <div className="header_middle">
                <div className="header_option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <OndemandVideoIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <GroupIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SportsEsportsIcon fontSize="large" />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHQxjjVGlBRnw/profile-displayphoto-shrink_100_100/0/1616425669542?e=1634774400&v=beta&t=hvgz5ChGDYr8HYNjQ3NO4VAyS7KajX-un4QrasyTtNw"/>
                    <h5>Nihal Shaikh</h5>
                </div>

                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
