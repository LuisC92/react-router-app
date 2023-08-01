import React from 'react'
import {Link} from "react-router-dom"

const Article = () => {
  return (
    <div>
      <Link to="/articles/1"><h3>Article 1</h3></Link>
      <Link to="/articles/2"><h3>Article 2</h3></Link>
      <Link to="/articles/3"><h3>Article 3</h3></Link>
    </div>
  )
}

export default Article