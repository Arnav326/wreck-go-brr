class ball
{
    constructor(x,y,r)
    {
        var options = 
        {
        restitution : 0.8,
        density:0.9,
        frictionair: 0.2
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        this.r = r
    }
    display()
    {
        fill("pink");
        push();
        ellipseMode(RADIUS);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipse(0, 0, this.r);
        pop();
        }
}