export default interface Swiper {
  $swiper: any;
  activeIndex: Number;
  slides: number;
  slideTo: (index: Number, speed?: number, runCallbacks?: boolean) => void;
}
