
import type { NextPage } from 'next'
import router, { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'


const NewMeetupPage : NextPage = () => {

    const router = useRouter();

    // 新增 _ 表單資料 ( POST )
    const addMeetupHandler = async ( enteredMeetupData : any ) => { 

        const response = await fetch( 'api/new-meetup' , {

                            method  : "POST" ,
                            body    : JSON.stringify( enteredMeetupData ) ,
                            headers : {
                                       'Content-Type' : 'application/json'  
                                      }

                         }) ;

        const res_Message = await response.json();    
        
        router.push('/') ; // 新增後，前往首頁
        
    }

    return <>
            
             <Head>
               <title> Add a New Meetup </title>
               <meta name="description" content="Add Your Own Meetups" />
             </Head> 

             <NewMeetupForm onAddMeetup = { addMeetupHandler } /> 
           
           </>
  
  
  }
  
  export default NewMeetupPage