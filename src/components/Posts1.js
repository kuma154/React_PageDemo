import React from 'react'

const Posts1 = ({posts,loading}) => {
    if(loading===true){
        return <h2>数据正在加载</h2>
    }
    return (
       <div>
           <ul className='list-group mb-4'>
               {posts.map((item,index)=>{
                   return <li className='list-group-item' key={item.id}>
                       <span>{item.id}---{item.title}</span>
                   </li>
               })}
           </ul>
       </div>
    )
}

export default Posts1