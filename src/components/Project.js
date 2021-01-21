// import { Col, Row } from "antd";



const Project = (props) => {
    const {name, linkGithub, linkDeploy, tech} = props;
    let strTech= "";
    for(let i=0; i < tech.length; i++){
        strTech += tech[i] + " ";
    }
    return(
        <div>
            <h3>{name}</h3>
            <p><b>Link Github: </b>{linkGithub}</p>
            <p><b>Link Deploy: </b>{linkDeploy}</p>
            <p><b>Áp dụng: </b>{strTech}</p>
        </div>
    )
}

export default Project;