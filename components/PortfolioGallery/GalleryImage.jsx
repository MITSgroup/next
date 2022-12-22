import Image from "next/image";

const GalleryImage = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => {
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49vzVik3b3///P3/pPAZPSzVxBgY9FW4NBQYAxrMK7Iw5NV8AAAAASUVORK5CYII=";
  return (
    <div style={wrapperStyle}>
      <div
        style={{
          display: "block",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          blurDataURL={placeholder}
          placeholder={"blur"}
          title={title}
          sizes={sizes}
          className={className}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default GalleryImage;
