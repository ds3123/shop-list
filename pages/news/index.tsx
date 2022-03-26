
import type { NextPage } from 'next'
import Link from "next/link"


// @ 新聞首頁
const NewsPage : NextPage = () => {

    return <>

              <h1> The News Page </h1>

              <ul>
                  <li> <Link href="/news/ddd"> Detail </Link> </li> 
              </ul>

           </>
      
  }
  
  export default NewsPage