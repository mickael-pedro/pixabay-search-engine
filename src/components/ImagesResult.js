export default function ImagesResult({images}) {
    return (
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images ? images.map(image => (
            <div>
                <img class="h-auto max-w-full rounded-lg" src={image.largeImageURL} alt=""/>
            </div>
        )) : null}
    </div>
    );
}