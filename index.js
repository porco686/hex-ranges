const hslConverted = require('hsl-to-hex');

function getColors({ range, quantity, saturation=100, lumosity=50 }) { 
   if(range.length !== 2) { 
       throw "Range() needs to be a length of 2"
   }

   if(!quantity) { 
       throw "You need to provide a quantity"
   }

   let summedRange;

   if(range[0] > range[1]) { 
       summedRange = +(range[0] - range[1]);
   }else { 
       summedRange = +(range[1] - range[0])
   }
 
   let toAdd = summedRange / quantity;
   let base = toAdd;
  let colors = []
  for(let i = 0;i<quantity;i++) { 
    colors.push(
        {
            hex: hslConverted(base, saturation, lumosity),
            hsl: [base, 100, 50], 
        }
    );

    base += toAdd;
  }

  return { 
     colors
  }
}











