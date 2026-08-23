/**
 * Intelligent Image Orientation & Aspect Ratio Utility
 * Detects natural dimensions of images dynamically and applies
 * responsive, orientation-aware container styling.
 */

export function setupImageOrientation(imgElement, containerElement, cardElement) {
    if (!imgElement || !containerElement) return;

    const computeAndApply = () => {
        const w = imgElement.naturalWidth;
        const h = imgElement.naturalHeight;

        if (!w || !h) return;

        const aspect = w / h;

        // Clear existing orientation classes
        containerElement.classList.remove('is-portrait', 'is-landscape', 'is-square');
        if (cardElement) {
            cardElement.classList.remove('has-portrait-media', 'has-landscape-media', 'has-square-media');
        }

        if (aspect < 0.85) {
            // Portrait orientation (e.g. mobile screenshots, A4 certificates)
            containerElement.classList.add('is-portrait');
            if (cardElement) cardElement.classList.add('has-portrait-media');
        } else if (aspect > 1.25) {
            // Landscape orientation (e.g. web dashboards, wide certificates)
            containerElement.classList.add('is-landscape');
            if (cardElement) cardElement.classList.add('has-landscape-media');
        } else {
            // Square / balanced orientation
            containerElement.classList.add('is-square');
            if (cardElement) cardElement.classList.add('has-square-media');
        }

        containerElement.style.setProperty('--media-aspect-ratio', aspect.toFixed(3));
    };

    if (imgElement.complete && imgElement.naturalWidth > 0) {
        computeAndApply();
    } else {
        imgElement.addEventListener('load', computeAndApply, { once: true });
    }
}

export function updateModalMediaOrientation(imgElement, mediaContainerElement) {
    if (!imgElement || !mediaContainerElement) return;

    const applyModalOrientation = () => {
        const w = imgElement.naturalWidth;
        const h = imgElement.naturalHeight;

        if (!w || !h) return;

        const aspect = w / h;
        mediaContainerElement.classList.remove('modal-media-portrait', 'modal-media-landscape', 'modal-media-square');

        if (aspect < 0.85) {
            mediaContainerElement.classList.add('modal-media-portrait');
        } else if (aspect > 1.25) {
            mediaContainerElement.classList.add('modal-media-landscape');
        } else {
            mediaContainerElement.classList.add('modal-media-square');
        }
    };

    if (imgElement.complete && imgElement.naturalWidth > 0) {
        applyModalOrientation();
    } else {
        imgElement.addEventListener('load', applyModalOrientation, { once: true });
    }
}
