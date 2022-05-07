import { useState } from "react";

const Category = () => {
  const [data, setData] = useState(Categories);
  return (
    <>
      <h1 className="text-center text-info">Let's Shop</h1>
      <div className="container-flud mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4">Men</button>
            <button className="btn btn-warning w-100 mb-4">Women</button>
            <button className="btn btn-warning w-100 mb-4">Childern</button>
            <button className="btn btn-warning w-100 mb-4">Black</button>
            <button className="btn btn-warning w-100 mb-4">White</button>
            <button className="btn btn-warning w-100 mb-4">All</button>
            <div>
              <div className="col-md-9">
                <div className="row">
                  {data.map((value) => {
                    const { id, title, price, image } = values;
                    return <></>;
                  })}
                  <div className="col-md-4 mb-4">
                    <img
                      src="..."
                      className="card-img-top"
                      alt="Card image cap"
                    />
                    <div className="className">
                      <div className="className-body">
                        <h5 className="className-title">class title</h5>
                        <p className="className-text">
                          Some quick example text to build on the class title
                          and make up the bulk of the className's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
