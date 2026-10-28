import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export function Home() {
    return (
        <>


            <div className='container'>



                <Carousel>
                    <Carousel.Item>

{/* ================ */}
                        <img className='Image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu02HSLX3QaTBNQvxDixkQFJbbxMTa0cUUMel-c_B7A&s=10' alt='image1' ></img>
                        
                        
                        <Carousel.Caption>

                            <h3 className="text-danger">First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                         </Carousel.Item>
                   
                   
{/* ========================== */}
                    <Carousel.Item>
                        <img className='Image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGButJ2TB5liScB3JCQ092vCdfEzfGuQmSC8GrRqCcig&s=10' alt='image2' c></img>

                

                    <Carousel.Caption>

                        <h3 className="text-danger">Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                     </Carousel.Item>
{/* ==================== */}
                    <Carousel.Item>
                        <img className='Image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDAzNEh2U4VF5b7666At0BGqidOwRkRbpu5b9vXoq5w&s=10' alt='image3' ></img>

                    

                    <Carousel.Caption>
                        <h3 className="text-danger">Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                     </Carousel.Item>

                </Carousel>

            </div>


        </>
    )
}