class Box
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8,
            density:1,
            friction:1,
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {   var pos=this.body.position;  
        push()
        translate(pos.x,pos.y,this.width,this.height)
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()    
    }
}

