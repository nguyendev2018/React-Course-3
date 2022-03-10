import React, { memo } from 'react'
function ChildUserCallBack(props) {
    let title = "cyberlearn";
    let object = { id: 1, name: "Khải" }
    console.log(title);
    console.log(object);
    console.log("re-render");
    return (
        <div>
            <small>{props.renderNotify()}</small>
            <textarea></textarea>
            <br></br>
            <button type="" className='btn btn-success'>Gửi</button>
        </div>
    )
}
// meno dùng để bao nguyên 1 component
export default memo(ChildUserCallBack)
// pure component khi props thay đổi thì nó sẽ tự động nhận ra sự thay đổi đó render lại giao diện 
// prure so sánh nguyên thủy là (kiểu so sánh shallow) 
//meno giống một phần của pure cũng so sánh kiểu nguyên thủy 