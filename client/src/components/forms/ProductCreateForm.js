import React from "react"


const ProductCreateForm = ({handleSubmit, handleChange, values}) => {

    //destruction
    const { 
        title, 
        description, 
        price, 
        category,
        categories, 
        subs, 
        shipping, 
        quantity, 
        images, 
        colors, 
        brands, 
        color, 
        brand
    } = values;

   

    return(
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label> Title </label>
        <input 
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={handleChange} 
        />
    </div>

    <div className="form-group">
        <label> Description </label>
        <input 
            type="text"
            name="description"
            className="form-control"
            value={description}
            onChange={handleChange} 
        />
    </div>

    <div className="form-group">
        <label> Price </label>
        <input 
            type="number"
            name="price"
            className="form-control"
            value={price}
            onChange={handleChange} 
        />
    </div>

    <div className="form-group">
        <label> Shipping </label>
        <select
            name="shipping"
            className="form-control"
            onChange={handleChange}>

            <option> Please select </option>
            <option value="No"> No </option>
            <option value="Yes"> Yes </option>

        </select>
    </div>

    <div className="form-group">
        <label> Quantity </label>
        <input 
            type="number"
            name="quantity"
            className="form-control"
            value={quantity}
            onChange={handleChange} 
        />
    </div>

    <div className="form-group">
        <label> Colors </label>
        <select
            name="color"
            className="form-control"
            onChange={handleChange}
        >
            <option> Please select </option>
            {colors.map((c) => <option key={c} value={c}>
                 {c} 
            </option>)}
        </select>
    </div>

    <div className="form-group">
        <label> Brands </label>
        <select
            name="brand"
            className="form-control"
            onChange={handleChange}
        >
            <option> Please select </option>
            {brands.map((b) => <option key={b} value={b}>
                 {b} 
            </option>)}
        </select>
    </div>

    <div className="form-group">
                     <label>Category</label>
                     <select 
                        name="category"
                        className="form-control" 
                        onChange={handleChange}>

                        <option>Pleace Select</option>
                        {categories.length > 0 && categories.map((c) =>
                        (<option key={c._id} value={c._id}>
                        {c.name}
                        </option>
                        ))}
                     </select>
                 </div>

    <button className="btn btn-outline-success"> Save </button>
</form>
    )
}

export default ProductCreateForm