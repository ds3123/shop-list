

import type { NextPage } from 'next'
import { useRouter } from "next/router";


// @ 新聞細節內容
const DetailPage : NextPage = () => {

    const router = useRouter();

    // 取得 URL 路徑傳遞的 : 動態參數
    const newsId = router.query.newsId ;

    return <h1>
              The News Page
           </h1>

  }
  
  export default DetailPage