import type { NextPage } from 'next'
import { InferGetStaticPropsType , GetServerSideProps } from 'next'
import { useState , useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'

import Head from 'next/head'


const HomePage : NextPage = ( props : any ) => {

  return <>

           <Head>
              <title> React Meetups </title>
              <meta name="description" content="Browse a hugg lilst of active React" />
           </Head> 

           <MeetupList meetups={ props.meetups } /> 

         </>
         
}


// # 會先執行此函式，取得資料。完成後，透過 props 傳入以上的 Component




const Dummy_Meetups = [
 
  {
    id          : 'm1' ,
    title       : 'A Frist Meetup' ,
    image       : 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Ivanovo_Obl_Palekh_asv2018-08_img21.jpg' ,
    address     : 'Some address 5 , 234' ,
    description : 'This is a first meetup'
  } ,

  {
    id          : 'm2' ,
    title       : 'A Second Meetup' ,
    image       : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Khost_children_in_2009.jpg' ,
    address     : 'Some address 5 , 234' ,
    description : 'This is a first meetup'
  } ,

]



// 【 SSG 】
export const getStaticProps = async () => {
    

    // 取得資料 

    return {
              props : {
                        meetups : Dummy_Meetups  
                      } ,   
              revalidate : 1  // 1 秒後，重新打包產生新的資料 
           }

}

// 【 SSR 】
// export const getServerSideProps : GetServerSideProps = async ( context ) => {
  
//      // 訊息物件 
//      const request  = context.req ;  // 客戶端 _ 請求訊息物件 ( Ex. 客戶端傳來的 cookie ，供伺服端驗證身分 )
//      const response = context.res ;  // 伺服端 _ 回應訊息物件


//     return {
//              props : {  meetups : Dummy_Meetups   }    


//           }

// }
       

export default HomePage
