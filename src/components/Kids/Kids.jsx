import React from 'react'

const Kids = () => {
    const kidProducts = [
        
            {img: "/images/kid1.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
            {img: "/images/kid2.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
            {img: "/images/kid3.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
            {img: "/images/kid4.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
            {img: "/images/kid5.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
            {img: "/images/kid6.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
            {img: "/images/kid7.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
            {img: "/images/kid8.jpg", title: "Best Kids Clothing", text: "Rs. 800 only"},
    ]
    return (
        
        <div className='container text-center '>
            <div className="row justify-content-center">
            {kidProducts.map((kidProducts, index) => (
                <div key={index} className='col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4'>
                    <div className="card" style={{ width: "14rem" }}>
                        <img
                            src={kidProducts.img}
                            className="card-img-top"
                            alt={kidProducts.title}
                            style={{ height: '14rem', objectFit: 'contain' }} />
                            <div className="card-body">
                            <h5 className="card-title">{kidProducts.title}</h5>
                            <p className="card-text">{kidProducts.text}</p>
                            <a href="#" className="btn btn-outline-primary rounded-0">Add To Cart</a>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
            </div>
    )
}

export default Kids
