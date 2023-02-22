const SingleNavLink =({id, reference, text, type}) => {
    return(
      <li key={id}>
        <a href={reference} className={type? type : "nav-link"}> {text} </a>
      </li>
    )
}

export default SingleNavLink