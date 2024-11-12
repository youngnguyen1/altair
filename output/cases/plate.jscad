function leftcutout_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[90.975,-110.025],[128.025,-110.025]]).appendArc([129.025,-109.025],{"radius":1,"clockwise":false,"large":false}).appendPoint([129.025,-106.025]).appendArc([130.025,-105.025],{"radius":1,"clockwise":true,"large":false}).appendPoint([141.475,-105.025]).appendArc([142.475,-106.025],{"radius":1,"clockwise":true,"large":false}).appendPoint([142.475,-124.025]).appendArc([143.475,-125.025],{"radius":1,"clockwise":false,"large":false}).appendPoint([161.4115874,-125.025]).appendArc([161.4987431,-125.0288053],{"radius":1,"clockwise":true,"large":false}).appendPoint([180.7483846,-126.7129308]).appendArc([180.834877,-126.7243177],{"radius":1,"clockwise":true,"large":false}).appendPoint([198.757148,-129.8844976]).appendArc([198.9581064,-129.9421215],{"radius":1,"clockwise":true,"large":false}).appendPoint([216.400441,-136.9892822]).appendArc([217.7022315,-136.4367049],{"radius":1,"clockwise":false,"large":false}).appendPoint([224.4638805,-119.7010365]).appendArc([223.9113032,-118.399246],{"radius":1,"clockwise":false,"large":false}).appendPoint([214.1419818,-114.4521839]).appendArc([214.5165884,-112.525],{"radius":1,"clockwise":true,"large":false}).appendPoint([223.025,-112.525]).appendArc([224.025,-111.525],{"radius":1,"clockwise":false,"large":false}).appendPoint([224.025,-36.475]).appendArc([223.025,-35.475],{"radius":1,"clockwise":false,"large":false}).appendPoint([206.025,-35.475]).appendArc([205.025,-34.475],{"radius":1,"clockwise":true,"large":false}).appendPoint([205.025,-31.975]).appendArc([204.025,-30.975],{"radius":1,"clockwise":false,"large":false}).appendPoint([187.025,-30.975]).appendArc([186.025,-29.975],{"radius":1,"clockwise":true,"large":false}).appendPoint([186.025,-28.975]).appendArc([185.025,-27.975],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.025,-27.975]).appendArc([167.025,-26.975],{"radius":1,"clockwise":true,"large":false}).appendPoint([167.025,-25.975]).appendArc([166.025,-24.975],{"radius":1,"clockwise":false,"large":false}).appendPoint([147.975,-24.975]).appendArc([146.975,-25.975],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.975,-26.975]).appendArc([145.975,-27.975],{"radius":1,"clockwise":true,"large":false}).appendPoint([128.975,-27.975]).appendArc([127.975,-28.975],{"radius":1,"clockwise":false,"large":false}).appendPoint([127.975,-31.975]).appendArc([126.975,-32.975],{"radius":1,"clockwise":true,"large":false}).appendPoint([90.975,-32.975]).appendArc([89.975,-33.975],{"radius":1,"clockwise":false,"large":false}).appendPoint([89.975,-109.025]).appendArc([90.975,-110.025],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[202.6755048,-128.1814804],[215.6560787,-133.4259727]]).appendPoint([220.900571,-120.4453988]).appendPoint([207.9199971,-115.2009065]).appendPoint([202.6755048,-128.1814804]).close().innerToCAG()
.union(
    new CSG.Path2D([[183.7351123,-124.1640419],[197.5224208,-126.5951164]]).appendPoint([199.9534953,-112.8078079]).appendPoint([186.1661868,-110.3767334]).appendPoint([183.7351123,-124.1640419]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.5,-122],[159.5,-122]]).appendPoint([159.5,-108]).appendPoint([145.5,-108]).appendPoint([145.5,-122]).close().innerToCAG()
).union(
    new CSG.Path2D([[207,-52.5],[221,-52.5]]).appendPoint([221,-38.5]).appendPoint([207,-38.5]).appendPoint([207,-52.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[207,-71.5],[221,-71.5]]).appendPoint([221,-57.5]).appendPoint([207,-57.5]).appendPoint([207,-71.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[207,-90.5],[221,-90.5]]).appendPoint([221,-76.5]).appendPoint([207,-76.5]).appendPoint([207,-90.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[207,-109.5],[221,-109.5]]).appendPoint([221,-95.5]).appendPoint([207,-95.5]).appendPoint([207,-109.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-48],[202,-48]]).appendPoint([202,-34]).appendPoint([188,-34]).appendPoint([188,-48]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-67],[202,-67]]).appendPoint([202,-53]).appendPoint([188,-53]).appendPoint([188,-67]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-86],[202,-86]]).appendPoint([202,-72]).appendPoint([188,-72]).appendPoint([188,-86]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-105],[202,-105]]).appendPoint([202,-91]).appendPoint([188,-91]).appendPoint([188,-105]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-45],[183,-45]]).appendPoint([183,-31]).appendPoint([169,-31]).appendPoint([169,-45]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-64],[183,-64]]).appendPoint([183,-50]).appendPoint([169,-50]).appendPoint([169,-64]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-83],[183,-83]]).appendPoint([183,-69]).appendPoint([169,-69]).appendPoint([169,-83]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-102],[183,-102]]).appendPoint([183,-88]).appendPoint([169,-88]).appendPoint([169,-102]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-42],[164,-42]]).appendPoint([164,-28]).appendPoint([150,-28]).appendPoint([150,-42]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-61],[164,-61]]).appendPoint([164,-47]).appendPoint([150,-47]).appendPoint([150,-61]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-80],[164,-80]]).appendPoint([164,-66]).appendPoint([150,-66]).appendPoint([150,-80]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-99],[164,-99]]).appendPoint([164,-85]).appendPoint([150,-85]).appendPoint([150,-99]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-45],[145,-45]]).appendPoint([145,-31]).appendPoint([131,-31]).appendPoint([131,-45]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-64],[145,-64]]).appendPoint([145,-50]).appendPoint([131,-50]).appendPoint([131,-64]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-83],[145,-83]]).appendPoint([145,-69]).appendPoint([131,-69]).appendPoint([131,-83]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-102],[145,-102]]).appendPoint([145,-88]).appendPoint([131,-88]).appendPoint([131,-102]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-50],[126,-50]]).appendPoint([126,-36]).appendPoint([112,-36]).appendPoint([112,-50]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-69],[126,-69]]).appendPoint([126,-55]).appendPoint([112,-55]).appendPoint([112,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-88],[126,-88]]).appendPoint([126,-74]).appendPoint([112,-74]).appendPoint([112,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-107],[126,-107]]).appendPoint([126,-93]).appendPoint([112,-93]).appendPoint([112,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-50],[107,-50]]).appendPoint([107,-36]).appendPoint([93,-36]).appendPoint([93,-50]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-69],[107,-69]]).appendPoint([107,-55]).appendPoint([93,-55]).appendPoint([93,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-88],[107,-88]]).appendPoint([107,-74]).appendPoint([93,-74]).appendPoint([93,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-107],[107,-107]]).appendPoint([107,-93]).appendPoint([93,-93]).appendPoint([93,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.6628956,-122.2690778],[178.6096214,-123.4892582]]).appendPoint([179.8298018,-109.5425324]).appendPoint([165.883076,-108.322352]).appendPoint([164.6628956,-122.2690778]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = leftcutout_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        