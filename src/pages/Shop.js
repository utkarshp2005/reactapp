import "./Shop.css";
import Carousel from 'react-bootstrap/Carousel';



export function Shop() {
    return (
        <>

            <div className="container">
                <div className="row">

                    <Carousel>

                        <Carousel.Item>
                            <img
                                className="img  d-block w-100"
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAuAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAgMBBAUH/8QAHhABAQEAAgMBAQEAAAAAAAAAAAECERIDE2FRMSH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAHREBAQADAQADAQAAAAAAAAAAAAECERITAwQUIf/aAAwDAQACEQMRAD8A+h5qmahmq5ryNPasXlUiGapk9M7FcqRLNUh6Z08NCw0CKeGLDSmitAAS0AAMoawaAKYpGGBlTTZoopbU0bFBbQlW3j5q2UMq5ro07sl8VTNRytkaZVXKmUsqQaZ1SGhMnh6Z08bGQ0GkVoDT0QDeANFtgaylotsLf4YtLQ2W0traWlYNs5JaNUmqm4l0LQndBOh28zK2UMVbFbdR6uUWyrlHK2T2yyVypEs1WGyqk/poWGgZ1SGLDHpFaJBP4aQ9ItEg4puAeiIDcMo0CUtPwWlpNqdJo+k9DlOyaS0pU9Fyi5JWtLsFwnt52FsI4WzXPH0GS2VsoYWzVxhkrlXKWapmtIyquT5TlPKqRnVYaEzTyqZ0zclbKaKcVnPIMgKy0WnpOyl020mqNJtLpPR7U9U5GdpLUdVTVR3T0ztJuhPVB8s7k4MVbNc2atmuSYPobm6c1XNc2arNNJiyuTozVc1zZ0rnSpiyuS8qkrnmlM6PSLkvmnlQmjzStM7VuTcozXJuw0W1pRyl2Hc9J2pay1PszsNJ2a0mtF1pO6ORFyNdJa0LpLVVIyuQ1UdabvSOtK0yyyLvQS3oKkYXJyZqudOXOlc6Z+b3b8jpzpWacudKTR8Iubrzo+dOWaUzocIubqzo825s6PNDlPTpmjzTmmjdxym5OmabNOeb/wAN2HJdOjsOyE0LsaLpbuy6R7DsNJuSl0nrRdaJdDSLkbWkrpmtJ60cjHLIb0jrTdaR3ppIxyyZvQS1oKkc9ycmapK581Saa8PW9HRNHmnPNf6eaLgvR0zSmdOaaPnSbiXbpmzzTlmlJouR26Zs005ps3dPJdOmaNNuWbNNlyXTp7js55tvcrC6X7fR2Q7juWk9K3RNaTuy3R6RcjXSetM1pK6ORllkbWkd6brX+Ja0uRhnkzemJ60FyMLk5pTypQ8rrsd/ormnlRlNyiw/ReaNNITR5pFg9F5o0055ps2nQ9HTNmm3NNG7p5Ho6O7Zv655sTadF6Ombb3c3YdisHo6e47ubuz2FpPo6e5btz3bL5D0i5rXRNaSvkJdnpnc1NaT1omtp62qRjnmbWghvQXI58s/6yU3JGyul19nlNymOS0XopNN7Jdmd02F6rzRuzn7s9hcpvzOruO7k9g9vCeS/RHZ3HscfuL7vpcJ/THd7PrfZ9ef7vo9xcF+qO/2fWe1we/6Wef/AH+jhP6o9C+T6W+X64r5p+kvnE+NN+zHdfL9LfL9cN8/0l8yvNll9p3Xy/UteX649ea/qd8v1U+Nhn9p178ocN8lC+HNfsbezxBwAHuVjGgMsi1gBsaWsYAzrL/C8gEypbb+ltvH9ANlazm/pLb+0AItrOb+ltvP9ANnbRzf2stv6ABustv6XkAIrKzhoCWWAAzf/9k="
                                alt="Shop"
                            />

                            <Carousel.Caption>
                                <h1 className="text-dark">Check Out Oour Best</h1>
                                <h1 className="text-dark">Coffee betans</h1>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>

                </div>
            </div>


        </>
    )
}