interface ImageSlideProps {
  src: string;
  i: number;
  isActive: boolean;
  handleClick: (i: number) => void;
}

const ImageSlide = ({ src, handleClick, i, isActive }: ImageSlideProps) => {
  return (
    <li
      className={`portfolio__images-item ${isActive ? 'active-image' : ''}`}
      onClick={() => handleClick(i)}
    >
      <img
        className="portfolio__images-img"
        src={src}
        alt={src.split('/')[0]}
      />
    </li>
  );
};

export default ImageSlide;
