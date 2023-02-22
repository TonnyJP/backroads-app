const SingleSocialLink = ({id, reference, icon, type}) => {
    return (
    <li key={id}>
        <a href={reference} target="_blank" rel="noreferrer" className={type}><i className={icon}></i></a>
    </li>
    )
}

export default SingleSocialLink