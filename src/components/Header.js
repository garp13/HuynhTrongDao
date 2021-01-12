
import { Avatar } from "antd";
import "../assets/styles/Header.scss";
import {FacebookOutlined,GithubOutlined} from "@ant-design/icons";
const Header = () => {
    return(
        <div>
            <div className="headerTop">
                <Avatar src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/135230673_1559051954279359_6803053794020728366_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=fnXhb3J4-LIAX_o3QkH&_nc_ht=scontent.fsgn2-3.fna&oh=6e42395c240f495f507a2f51887eaef9&oe=601986AC"/>
            </div>

            <div className="headerBot">
                
                    <p className="textName">
                        Huỳnh Trọng Đạo
                    </p>
                    <p className="textJob">
                        Front-End Devoloper
                    </p>
                <div className="iconContact">
                    <a href="https://www.facebook.com/garp13.github.io/">
                        <FacebookOutlined/>
                    </a>
                   
                    <a href="https://github.com/garp13">
                        <GithubOutlined />
                    </a>
                    
                </div>
                
                
            </div>
        </div>
    )
}


export default Header;