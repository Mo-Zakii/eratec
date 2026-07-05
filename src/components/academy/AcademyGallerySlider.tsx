type AcademyGallerySliderProps = {
  images: string[];
};

const AcademyGallerySlider = ({ images }: AcademyGallerySliderProps) => {
  const loopImages = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="flex w-max gap-4 animate-marquee-left hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loopImages.map((img, index) => (
          <div
            key={index}
            className="shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] rounded-2xl overflow-hidden border border-primary/10"
          >
            <img
              src={img}
              alt={`ERATEC Academy training ${(index % images.length) + 1}`}
              className="w-full h-52 sm:h-64 lg:h-72 object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademyGallerySlider;
