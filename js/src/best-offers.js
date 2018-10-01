// A product is sold in a time frame. 1->n sellers are offered with a price.
// Example:
// - Seller 1 has an offer from 1pm to 6pm with a price of 20
// - Seller 2 has an offer from 2pm to 5pm with a price of 15

// Return a vector with smallest offers in above time slots.

// Solution:
// - From 1pm to 2pm - price 20
// - From 2pm to 5pm - price 15
// - From 5pm to 6pm - price 20

class BestOffers {
  
  constructor() {
    this.list = [];
    this.offers = [];
  }
  
  /**
    [
      { 
         start: timestamp,
         end: timestamp,
         value: number
      }
    ]
  */
  
  populate(entries) {
    this.list = entries;
    
    const l = this.list.length;
    for(let i=1; i<l; i++) {
      for(let j=i; j>0; j--) {
        if(this.list[j].start < this.list[j-1].start) {
          let temp = this.list[j];
          this.list[j] = this.list[j-1];
          this.list[j-1] = temp;
        }
      }
    }
  }
  
  intersect(offers, seller) {
    let intervals = [];
    for(let i=0; i<offers.length; i++) {
      // check if there is any intersections - start on seller is always bigger
      if(seller.start > offers[i].end) {
        // do not intersect
        intervals.push(offers[i]);
        intervals.push(seller);
      } else {
        if (seller.start < offers[i].end && seller.end > offers[i].end) {
          if(seller.value < offers[i].value) {
            // leave only start of offers[i] and add seller
            intervals.push({
              seller: offers[i].seller,
              start: offers[i].start,
              end: seller.start,
              value: offers[i].value
            });
            intervals.push({
              seller: seller.seller,
              start: seller.start,
              end: seller.end,
              value: seller.value
            });
          } else {
            // leave offers[i] in full and add only remaining of seller
            intervals.push({
              seller: offers[i].seller,
              start: offers[i].start,
              end: offers[i].end,
              value: offers[i].value
            });
            intervals.push({
              seller: seller.seller,
              start: offers[i].end,
              end: seller.end,
              value: seller.value
            });
          }
        } else {
          if(seller.start < offers[i].end && seller.end < offers[i].end) {
            if (seller.value < offers[i].value) {
              // there will be 3 intervals for this case
              intervals.push({
                seller: offers[i].seller,
                start: offers[i].start,
                end: seller.start,
                value: offers[i].value
              });
              intervals.push({
                seller: seller.seller,
                start: seller.start,
                end: seller.end,
                value: seller.value
              });
              intervals.push({
                seller: offers[i].seller,
                start: seller.end,
                end: offers[i].end,
                value: offers[i].value
              });
            } else {
              intervals.push(offers[i]);
            }
          }
        }
      } 
    }
    return intervals;
  }
  
  getBestOffers() {
    
    const l = this.list.length;
    const list = this.list;
    this.offers = [list[0]];
    for(let i=1; i<l; i++) {
      this.offers = this.intersect(this.offers, list[i]);
    }
    console.log("offers");
    console.log(this.offers);
    return this.offers;
  }
  
  showList() {
    console.log(this.list);
  }
}

let offers = new BestOffers();
offers.populate([{
  seller: 'st2',
  start: new Date('2018-09-25 07:00:00'),
  end: new Date('2018-09-25 10:00:00'),
  value: 30
}, {
  seller: 'st1',
  start: new Date('2018-09-25 05:00:00'),
  end: new Date('2018-09-25 08:00:00'),
  value: 20
}]);
offers.showList();
offers.getBestOffers();

offers.populate([{
  seller: 'st2',
  start: new Date('2018-09-25 01:00:00'),
  end: new Date('2018-09-25 06:00:00'),
  value: 20
}, {
  seller: 'st1',
  start: new Date('2018-09-25 02:00:00'),
  end: new Date('2018-09-25 05:00:00'),
  value: 15
}]);
offers.showList();
offers.getBestOffers();
