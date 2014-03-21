var canvas, ctx, images, img, nutSack, sourceImg, width, height, ran;

chrome.extension.onRequest.addListener(function (request) {
    if (request.greeting == 'hello' && !ran) {

        ran = true;

        nutSack = document.createElement('img');
        nutSack.src = chrome.extension.getURL('nutsack.png');
        nutSack.addEventListener('load', function() {

            images = document.getElementsByTagName('img');

            for (img in images) {

                if (images.hasOwnProperty(img)) {
                    sourceImg = images[img];

                    width = sourceImg.clientWidth;
                    height = sourceImg.clientHeight;

                    if (width >= 100) {
                        console.log('stuff');

                        canvas = document.createElement('canvas');

                        canvas.setAttribute('width', width.toString());
                        canvas.setAttribute('height', height.toString());

                        ctx = canvas.getContext('2d');
                        ctx.drawImage(sourceImg, 0, 0, width, height);
                        ctx.drawImage(nutSack, 0, 0, width, height);

                        sourceImg.parentNode.replaceChild(canvas, sourceImg);

                        //canvas.src = canvas.toDataURL("image/png");
                        //toDataURL() throws error due to tainted canvas
                    }
                }
            }
        }, false);
    }
});