export default interface Swiper {
  activeIndex: Number;
  slideTo: (index: Number, speed?: number, runCallbacks?: boolean) => void;
}
