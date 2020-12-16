import React,{useState} from 'react'

const Page = ({ posts, postsPage, changeCurrentPage }) => {
   const [btnIndex,setBtnIndex]=useState(1);
const btns = [];

    for (let i = 1; i <= Math.ceil(posts.length / postsPage); i++) {
        btns.push(i);
    } 
    
    // 上一页
    const handleclick=()=>{
        if(btnIndex<1){
            setBtnIndex(1)
            changeCurrentPage(1)
        }
        setBtnIndex(btnIndex-1)
 
        changeCurrentPage(btnIndex-1)
    }

    // 下一页
    const handleclickNext=()=>{
        if(btnIndex>btns.length-1){
            setBtnIndex(btns.length-1);
            changeCurrentPage(btns.length-1)
        }
        setBtnIndex(btnIndex+1)
        changeCurrentPage(btnIndex+1)
    }

    // 切换页
    const change=(item)=>{
        console.log(btnIndex)
        changeCurrentPage(item);
        setBtnIndex(item);
        console.log(btnIndex)
    }
    return (
        <ul className='pagination'>
            <li><a onClick={handleclick} className='page-link' href='!#'>上一页</a></li>
            {
                btns.map((item, index) => {
                    return (
                       
                        
                        <li key={item} className='page-item'>
                            <a onClick={()=>change(item)} className='page-link' href='!#'>{item}</a>
                        </li>
                       

                        )
                })
            }
             <li><a onClick={handleclickNext} className='page-link' href='!#'>下一页</a></li>
        </ul>
    )
}

export default Page
