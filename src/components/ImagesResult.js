export default function ImagesResult({images}) {
    return (
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {images ? images.map(image => (
            <div>
                <img class="h-[300px] w-[450px] object-cover object-center" src={image.largeImageURL} alt=""/>
            </div>
        )) : null}
    </div>
    );
}