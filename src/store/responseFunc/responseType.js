import {router} from "../../component/router";
export const responseMsg=response1=>{
    if(response1.data.processStatus.code===200){
        if( response1.data.friendlyMessage!= null)
        alert(response1.data.friendlyMessage.description)
     }else{
        alert(response1.data.friendlyMessage.description);
        router.replace("/")
     }
}