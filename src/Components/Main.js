import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
const Main=()=>{
    const [search,setSearch]=useState("");
    // const [option,setOption] = useState(1)
    // const [bookData,setData]=useState([]);
    const [bookData, setAllBooks] = useState()


    const maniBooks =(books) =>{

        console.log(books)
        var tempDic = {}
        for(var i = 0; i< books.length;i++){
    
            if(tempDic[books[i].id]==null){
                tempDic[books[i].id] = books[i];
            }else{
                const t = books[i].typeResults[0]
                tempDic[books[i].id].typeResults.push(t)//typeResults 第一位放到temp里的那个typeresult里面
            }
            
        }
    
    
        var returnArray = []
        for (var key in tempDic){//go over the dict and put them into an array
            returnArray.push(tempDic[key])
        }
    // 
        console.log(returnArray)
        setAllBooks(returnArray)
    
    
      }

      const moreBook = (e) =>{
       
      }



    const searchBook=(e)=>{
        if(e.key==="Enter")
        {
            axios.get('http://localhost:8080/api/books/getAllByName/'+  search  
            
            )
            // axios.get("")
            .then(
                
                res=>{
                    console.log(res.data)
                    maniBooks(res.data.data)
                    // setData(res.data)
                }
                
            )
            .catch(err=>console.log(err))
        
        
        }
        
        // else if(e.key==="Enter"){
        //     axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
        // .then(res=>setAllBooks(res.data.items))
        //     .catch(err=>console.log(err))
        // }
    }
    return(
        <>
            <Navbar/>
            <div className="header">
                {/* <div className="row1">
                    <h1>React<br/> Library</h1>
                </div> */}
                <div className="row2">
                    <h2>Find Your Book</h2>
                    {/* <h4 onClick={setOption(0)}>GOOGLE BOOK</h4> */}
                    {/* <h4 onClick={setOption(1)}>OTHER</h4> */}
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        {/* <button><i className="fas fa-search"></i></button> */}
                    </div>
                    <img src="./logo192.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card book={bookData}/>
              {/* <div style={{color:"#61dbfb"}} onClick={() => moreBook()}>Show more books</div> */}
            </div>
        </>
    )
}
export default Main;