import react from 'react';
const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }

    console.log(item)
    // let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
       
            <div className="overlay">
                <div className="overlay-inner">
                    <div className="titleCloseBtn">
                        <button
                            onClick={onClose}
                        >
                            X
                        </button>
                    </div>

                    <div className="inner-box">
                        <img src={item.pic} alt="" />
                        <div className="info">
                            <h1>{item.name}</h1>
                            <h3>{item.author}</h3>
                            {
                                
                                item.typeResults&&item.typeResults.map((t)=>{
                                    // console.log(t)
                                    return(<span>{t.type_name+"     "}</span > )
                                })
                                
                            }
                            <br></br>
                            {item.link&&<a href={item.link} download> download file</a>}
                            {/* <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/> */}
                            
                            <br></br>
                            
                            <a href="https://google.com"><button>More</button></a>
                        </div>
                    </div>
                    
                    <br></br>
                    <h5 className="description">Brief:</h5>
                    {item.brief
                    ?<h4 className="description">{item.brief}</h4>
                    :<h4 className="description">Nothing</h4>}
                </div>
            </div>
        </>
    )
}
export default Modal;