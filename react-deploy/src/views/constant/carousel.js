import React, { Component } from "react";
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
} from "reactstrap";
import Satu from "../../image/satu.jpg";
import Dua from "../../image/dua.jpg";
import Tiga from "../../image/tiga.jpg";
import Empat from "../../image/empat.jpg";

class Wiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          src: Satu,
          altText: "Slide1",
          caption: "Slide1",
        },
        {
          src: Dua,
          altText: "Slide2",
          caption: "Slide2",
        },
        {
          src: Tiga,
          altText: "Slide3",
          caption: "Slide3",
        },
        {
          src: Empat,
          altText: "Slide4",
          caption: "Slide4",
        },
      ],
      activeIndex: 0,
      animating: false,
    };
  }

  handleNext = () => {
    const { activeIndex, animating, items } = this.state;

    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  handlePrevious = () => {
    const { activeIndex, animating, items } = this.state;

    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  handleGoToIndex = (nextIndex) => {
    const { animating } = this.state;

    if (animating) return;
    this.setState({ activeIndex: nextIndex });
  };

  render() {
    const { items } = this.state;

    const slides = items.map((el) => {
      return (
        <CarouselItem
          key={el.src}
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
        >
          <img className="w-100" src={el.src} alt={el.altText} />
          <CarouselCaption
            captionText={el.caption}
            captionHeader={el.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel activeIndex={this.state.activeIndex}>
          <CarouselIndicators items={items} />
          {slides}
          <CarouselControl />
          <CarouselControl />
        </Carousel>
      </div>
    );
  }
}

export default Wiper;
