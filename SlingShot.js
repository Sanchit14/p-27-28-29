
class SlingShot{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height= height;
        

        var options = {
          bodyA: this.sling,
          pointB: (250,200),
          stiffness: 0.04,
          length: 10
      }
      this.sling = Constraint.create(options);
      World.add(world,this.body);
      
      }
    
      display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = (250,200);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
        
        
            
      
        
      }  
}