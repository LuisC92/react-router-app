import React from 'react'
import {useParams} from "react-router-dom"

const ArticleDetails = () => {

    const {id} = useParams()

    // console.log(id)

  return (
    <div>ArticleDetails {id}</div>
  )
}

export default ArticleDetails