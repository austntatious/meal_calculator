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
    tipRate = .15,
    billTotal = billSubtotal+taxTotal+tipTotal,
    billSubtotal = undefined,
    taxTotal = taxRate*billSubtotal,
    tipTotal = tipRate*billSubtotal;

// Diner Object constructor
// diner obj prototype should have all NON unique methods, tax calculation, tip

var Diner = function Diner(dinerName) {
    this.dinerName = dinerName;
    this.dishes = [];
    this.tipDue = this.subtotal*tipRate;
    this.taxDue = this.subtotal*taxRate;
    //for subtotal, loop through array of obj in dishes property and sum values 
    this.subtotal = ,
    this.totalDue = this.subtotal + this.tip + this.tax;
    };
    
Diner.prototype = {
    taxCalc: function(){
        this.subtotal()*taxRate;
    },
    tipCalc: function(){
        this.subtotal()*tipRate;
    },
    addDish: function(dish){
        //check if dish exists in object array and push obj to dishes array
        function doesDishExist(dish){
            return this.hasOwnProperty(dish); 
        }
        this.dishes.push(menu.filter(doesDishExist));
    },
    //loop through dishes and add to total sum
    calcSubtotal: function() {
        
        //make current Diner object's subtotal equal to the result
    },
    
};

//find billsubtotal by adding all Diners subtotals with function

// Print Total Bill - subtotal, tax, tip, and total
function printBill(){
    
}
// loop through all instances of Diner objects, and add subtotal, total,
// tax and tip and print to console

// Print what each Diner owes
// find all objects that inherit from Diner and 
function printDiner(){
    
    
}

//loop through all obj that inherit from Diner and execute printDiner
function printFullBreakdown(){
    
}