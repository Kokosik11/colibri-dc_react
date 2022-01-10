

const ProjectCard = props => {
    return (
        <a href={props.href ? props.href : ""} target="_blank" className="project">
            <div className="card-img">
                {props.img ? <img src={props.img} alt={props.alt} /> : ""}
            </div>

            {props.title ? 
            <div className="project-card_title">
                {props.title}
            </div> : ""
            }
            
        </a>
    )
}

export default ProjectCard;