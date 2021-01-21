// import { Col, Row } from "antd";



const Project = (props) => {
    const {name, linkGithub, linkDeploy, tech} = props;
    let strTech= "";
    for(let i=0; i < tech.length; i++){
        strTech += tech[i] + " ";
    }
    return(
        <div>
            <h1>{name}</h1>
            <p>
                <b>Link Github: </b>
                <a href={linkGithub} target="_blank" rel="noreferrer">
                    <i class="fa fa-github"> {linkGithub} </i>    
                    
                </a>
            </p>
            <p>
                <b>Link Deploy Project: </b>
                <a href={linkGithub} target="_blank" rel="noreferrer">
                    <i class="fa fa-heart"> {linkDeploy} </i>
                    
                </a>
                
            </p>
            <p><b>Áp dụng: </b>{strTech}</p>
        </div>
    )
}

export default Project;