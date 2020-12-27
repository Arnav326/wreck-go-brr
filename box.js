class Box
{
    constructor(x,y,w,h)
    {
        var options = 
        {
        restitution : 0.8,
        density:0.25,
        friction: 0.4
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
    }
    display()
    {
        stroke("green")
        strokeWeight(5);
        fill("white");
        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.w, this.h);
        pop();
        }
}