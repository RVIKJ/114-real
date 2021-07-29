function preload()
{}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size();
    video.hide();
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function take_snapshot()
{
    save('my_filter_image.png');
}