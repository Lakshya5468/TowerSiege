class Slingshot{
    constructor(bodyA,pointA){
        var options = {
            bodyA: bodyA.body,
            pointA: pointA,
            length: 10,
            stiffness: 0.04
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        push();
        var pointA=this.chain.bodyA.position;
            strokeWeight(4);
            stroke(158, 22, 22);
            line(pointA.x,pointA.y,bodyA.x,bodyA.y);
            pop();
    }
    fly(){
        this.chain.pointA=null;
        }
        attach(body){
            this.chain.bodyA=body;
        }
    }