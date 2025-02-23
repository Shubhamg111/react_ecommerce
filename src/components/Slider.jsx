import React from 'react'

const Slider = () => {
  return (
    <div>

      <div id="carouselExampleAutoplaying" class="carousel slide position-relative container my-5 p-0" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/b1.jpg" class="d-block w-100" alt="banner"/>
          </div>
          <div class="carousel-item">
            <img src="/images/b2.jpg" class="d-block w-100" alt="banner"/>
          </div>
          <div class="carousel-item">
            <img src="/images/b3.jpg" class="d-block w-100" alt="banner"/>
          </div>
          
        </div>

        <div className="banner-text col-md-5 position-absolute">
            <h2 className='text-light fs-1'>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, molestias ut!</p>

            <button className='btn btn-dark mt-3'>Learn More <i className='bi bi-arrow-right'></i></button>

        </div>


        <button class="carousel-control-prev prev" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next next" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider
