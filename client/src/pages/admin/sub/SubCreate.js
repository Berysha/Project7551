import React, {useState, useEffect} from "react"
import AdminNav from "../../../components/nav/AdminNav"
import {toast} from "react-toastify"
import {useSelector} from "react-redux"
import {getCategories} from "../../../functions/category"
import {createSub,
       
        removeSub} from "../../../functions/sub"
import {Link} from "react-router-dom";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons"
import CategoryForm from "../../../components/forms/CaregoryForm"
import LocalSearch from "../../../components/forms/LocalSearch"

const SubCreate = () => {
    const {user} = useSelector(state => ({...state}))
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const [categories,setCategories] = useState([])
    const [category, setCategory] = useState("")
    

     //step 1
     const [keyword, setKeyword] = useState("")

    useEffect(() =>{
            loadCategories()
    }, [])

    const loadCategories = () => getCategories()
        .then((c) => {
            setCategories(c.data)
        })

    const handleSubmit= (e) => {
        e.preventDefault()
       // console.log(name)
        setLoading(true)
        createSub({name, perent: category,}, user.token)
        .then((res) => {
            setLoading(false)
            setName("")
            toast.success(`"${res.data.name}" is created`)
            loadCategories()
        })
        .catch(err => {
            console.log(err)
            setLoading(false) 
            if (err.response.status === 400) {
                 toast.error(err.response.data)
}  
      })
    }

    const handleRemove = async (slug) => {
       /* let answer = window.confirm("Delete?")
        console.log(answer, slug)*/
        if(window.confirm("Delete?")){
            setLoading(true)
            removeSub(slug, user.token)
            .then((res) => {
                    setLoading(false)
                    toast.error(`${res.data.name} deleted`)
                    loadCategories()
            })
            .catch((err) => {
                if(err.response.status === 400) {
                    toast.error(err.response.data)
                }
                setLoading(false)
                loadCategories()
            })
        }
    }
 
       //step3
      
    

    //step4
    const searched= (keyword) => (c) => c
     .name
    .toLowerCase()
    .includes(keyword)

    
    return (
        <div className="container-fluid">
             <div className="row">
                 <div className="col-md-2">
                     <AdminNav />
                 </div>
                    <div className="col">
                        {loading ?( <h4  
                        className="text-success">Loading..</h4>) : (
               <h4>Create sub categories</h4>)}
           
               


                 <div className="form-group">
                     <label>ParentCategory</label>
                     <select name="category"
                             className="form-control" 
                             onChange={(e) => setCategory(e.target.value)}>
                                 <option>Pleace Select</option>
                         {categories.length > 0 && categories.map((c) =>
                          (<option key={c._id} value={c._id}>
                             {c.name}
                             </option>
                             ))}
                     </select>
                 </div>

                 {JSON.stringify(category)}

                 <CategoryForm  handleSubmit={handleSubmit}
                 name={name}
                 setName={setName}/>

          

                  {/* step 2 and step3  */}
                  <LocalSearch keyword={keyword}
                             setKeyword= {setKeyword}
                            />

                     <hr/>
                {/* step5 */}
               
      {/*categories.filter(searched(keyword)).map((c) => (
                <div className="alert alert-info" key={c._id}>{c.name}
                 <span  onClick={() => handleRemove(c.slug)} 
                className="btn btn-sm float-right">
                    <DeleteOutlined className="text-danger" />
                    </span>{" "} 

                    <Link className="btn btn-sm float-right" 
                    to={`/admin/sub/${c.slug}`}> 
                    <EditOutlined className="text-success" />
                
                    </Link>

      </div>))*/}
            </div>
        </div>
    </div>
    )
}

export default SubCreate;