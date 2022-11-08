import React from 'react';
import { Link } from 'react-router-dom';

export default function justArrived() {
  return (
    <section className="flex flex-col py-16 mt-3">
      <div className="container mx-auto mb-4 lg:px-10">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl font-semibold capitalize">
            just arrived <br/> this summer for you
          </h3>
        </div>
        
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        <div className="flex -mx-4 flex-row relative">
          <div className="card px-4 relative ">
            <div className="rounded-xl overflow-hidden card-shadow" style={{ width: 287,height: 386 }}>
              <img src="assets/img/img-item-1.jpg" className="w-full h-full object-cover object-center" alt="cangkir"/>
            </div>
            <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
              <span>IDR. 89.000</span>
              <Link to="/details" className="streached-link">
              </Link>
          </div>
          <div className="card px-4 relative ">
            <div className="rounded-xl overflow-hidden card-shadow " style={{ width: 287,height: 386 }}>
              <img src="assets/img/img-item-2.jpg" className="w-full h-full object-cover object-center" alt="cangkir"/>
            </div>
            <h5 className="text-lg font-semibold mt-4">Bankyu Minimax</h5>
              <span>IDR. 2.700.000</span>
              <Link to="/details" className="streached-link">
              </Link>
          </div>
          <div className="card px-4 relative ">
            <div className="rounded-xl overflow-hidden card-shadow " style={{ width: 287,height: 386 }}>
              <img src="assets/img/img-item-3.jpg" className="w-full h-full object-cover object-center" alt="cangkir"/>
            </div>
            <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
              <span>IDR. 1.000.000</span>
              <Link to="/details" className="streached-link">
              </Link>
          </div>
          <div className="card px-4 relative ">
            <div className="rounded-xl overflow-hidden card-shadow " style={{ width: 287,height: 386 }}>
              <img src="assets/img/img-item-4.jpg" className="w-full h-full object-cover object-center" alt="cangkir"/>
            </div>
            <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
              <span>IDR. 3.400.000</span>
              <Link to="/details" className="streached-link">
              </Link>
          </div>

          
          <div className="card px-4 relative ">
            <div className="rounded-xl overflow-hidden card-shadow " style={{ width: 287,height: 386 }}>
              <img src="assets/img/img-item-5.jpg" className="w-full h-full object-cover object-center" alt="cangkir"/>
            </div>
            <h5 className="text-lg font-semibold mt-4">Racking Plants</h5>
              <span>IDR. 2.400.000</span>
              <Link to="/details" className="streached-link">
              </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
