/*   
Create diner objects which represent a single diner
add dishes to diner's meal
total up cost of all diner's meals
add fixed tax % to total bill
add percentage tip to total bill
split the bill fairly among the diners
    each diner should pay tax on their own food
    each diner should pay equal share of tip
    rounded amounts may have amount sums that are not = to total bill amt
        distribute discrepancy fairly?
*/

//menu, tip + tax rate
var menu = [{steak: 16.99},
            {salad: 7.99},
            {soup: 5.49},
            {chicken: 8.95}],
    taxRate = .08,
    tipRate = .15;

// Diner Object constructor
// diner obj prototype should have all NON unique methods, tax calculation, tip
console.log("This is working!");
var Diner = function Diner(dinerName) {
    this.dinerName = dinerName;
    this.dishes = [];
    this.tip = undefined;
    this.tax = undefined;
    this.subtotal = undefined;
    this.totalDue = undefined;
    };
    
Diner.prototype = {
    taxCalc: function(){
        
    },
    tipCalc: function(){
        
    },
    addDish: function(dish){
        //check if dish exists in object array and push obj to dishes array
        function doesDishExist(dish){
            return this.hasOwnProperty(dish); 
        }
        this.dishes.push(menu.filter(doesDishExist));
    },
    calcSubtotal: function() {
        
    },
    calcTotalDue: function (){
        this.totalDue = this.subtotal + this.tip + this.tax;
    },
    
};

// Print Total Bill


// Print what each Diner owes