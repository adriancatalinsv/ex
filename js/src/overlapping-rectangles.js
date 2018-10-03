// Overlapping Rectangles

// Determine if two rectangles overlap
// It may be assumed that the rectangles are parallel to the coordinate axis.

/*
  rectangle type {
    x1, y1, x2, y2
  }
*/
// Input type: Object
// Sample inputs:
// { "first": { "x1": 0, "y1": 10, "x2": 10, "y2": 0 }, "second": { "x1": 5, "y1": 5, "x2": 15, "y2": 0 } }
// { "first": { "x1": 0, "y1": 2, "x2": 1, "y2": 1 }, "second": { "x1": -2, "y1": -3, "x2": 0, "y2": 2 } }
const overlappingRectangles = (first, second) => {
  
  // first is to the left of second OR
  // second is to the left of first
  if(first.x2 < second.x1 || second.x2 < first.x1) {
    return false;
  }
  
  // first is above second OR
  // second is above first
  if(first.y2 > second.y1 || second.y2 > first.y1) {
    return false;
  }
  
  return true;
}

return execute = (string) => {
  const input = JSON.parse(string);
  const result = overlappingRectangles(input.first, input.second);
  console.log(result);
  return result;
}
