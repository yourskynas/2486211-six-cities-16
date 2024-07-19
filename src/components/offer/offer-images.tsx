const ImageItem = ({image}: {image: string}): JSX.Element => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={image} alt="Photo studio"/>
  </div>
);
const OfferImages = ({images}: {images: string[]}): JSX.Element => (
  <>
    {images.map((image) => <ImageItem key={image} image={image}/>)}
  </>
);

export default OfferImages;
