
    //carousels/Bootstrap.js
    import { SetStateAction, useState } from "react";
    import { carouselItems } from "@/helpers/jsonData";
    import { Card, Carousel } from "react-bootstrap";
    import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
    // import styles from "../styles/Bootstrap.module.css";
    
    export default function BootstrapCarousel() {
      const { items: bootstrap } = carouselItems;
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
      };
      return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {bootstrap.bootstrap.map((item) => (
            <Carousel.Item key={item.id} interval={4000}>
              <img src={item.imageUrl} alt="slides" />
              <Carousel.Caption >
                {/* <h3>{item.title}</h3>
                <p>{item.body}</p> */}

                
                {/* <button className="btn btn-primary">Visit Docs</button>
                <button className="btn btn-primary">Visit Docs</button>
                <button className="btn btn-primary">Visit Docs</button>
                <button className="btn btn-primary">Visit Docs</button> */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    }

