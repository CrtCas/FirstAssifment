import axios from "axios"
async function getData(user_id){
    const {data:user_data} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);

    const {data:post_data} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

    let posts = post_data.filter(item => item.id ===1)

    let merged_data  = {...user_data,posts}
    console.log(merged_data);

 }

export default getData 
