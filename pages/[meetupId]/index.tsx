

import MeetupDetail from "../../components/meetups/MeeupDetail";
import { GetStaticProps } from 'next' ;


const MeetupDetails = () => {

    const obj = {
                  image       : "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ivanovo_Obl_Palekh_asv2018-08_img21.jpg" ,
                  title       : "First Meetup" ,
                  address     : "Some Street 5 , Some City" ,
                  description : "The Meetup Dcscription"
                }


    return <>
              <MeetupDetail {...obj} />   
           </>

} ;


// for 動態參數 ( dynamic SSG )
export const getStaticPaths = async ()=>{

   return {
            fallback : false ,
            
            paths : [    // 也許有很多頁面，但只界定那些 URL 路徑參數，要使用 SSG 
 
                        
                  {
                    params : {
                                meetupId : 'm1' ,  
                              } 
                  } , 
                  
                  {
                    params : {
                              meetupId : 'm2' ,  
                            } 
                  } , 


            ]

           }

           // ( 之後改為 _ 從資料庫取得資料陣列 Ex. meetups )
           /*
               paths : meetups.map( meetup => {

                          return { params : { meetupId : meetup.id.toString()  } } 

                       })
    
           */  


}




export const getStaticProps = async ( context : any ) => {
    
  // # 取得 _ 單一 Meetup
  const meetupId = context.params.meetupId ; // 取得 _ 動態參數 [meetupId]


  return {
            props : {
                       meetupData : {

                           image       : "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ivanovo_Obl_Palekh_asv2018-08_img21.jpg" ,
                           id          : meetupId ,
                           title       : "First Meetup" ,
                           address     : "Some Street 5 , Some City" ,
                           description : "The Meetup Dcscription" 

                       }      
                    } ,   
            revalidate : 1  // 1 秒後，重新打包產生新的資料 
         }

}


export default MeetupDetails
       