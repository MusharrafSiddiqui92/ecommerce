import React from 'react';

const Women = () => {
  const products = [
    { img: "/images/women1.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
    { img: "/images/women2.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
    { img: "/images/women3.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
    { img: "/images/women4.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
    { img: "/images/women5.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
    { img: "/images/women6.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
    { img: "/images/women7.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
    { img: "/images/women8.jpg", title: "Libas-e-Mashriq", text: "OutClass Staff and Unbeatable Stitch Quality." },
  ];

  return (
    <div className="container mt-4 text-center">
      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "14rem" }}>
              <img 
                src={product.img} 
                className="card-img-top" 
                alt={product.title} 
                style={{ height: '14rem', objectFit: 'contain' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.text}</p>
                <a href="#" className="btn btn-outline-primary rounded-0">Add To Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
