### Branching types

![Image](../images/br0.jpg)

➕ Quicker and cleaner for simple branching logic, and displayed in a more easily readable form in the workflow  
➕ Can automatically create a branch for each possible property value  
➖ Limited to <u><i>is (not) equal to</i></u> comparison of one property  
➖ Need to manually add a new data source for comparison of associated properties  

<br>
![Image](../images/br1.jpg)

➕ Allows more complex logic on one or more record/associated properties  
➕ Many different comparison operators (in addition to <u><i>equals</i></u>/<u><i>not equals</i></u>)  
➕ Can handle branching on a ***multiple checkbox*** property  
➖ Does not display as cleanly in the workflow (and is clunkier to set up)  

### Branching logic on a ***multiple checkbox***

![Image](../images/mult.jpg)

In the above picture, any branching logic that uses *Which facilitated surveys are required* = <u>Parent + Report</u> will <span class="red">evaluate as false</span>.  
<u><i>Is any of</i></u>, <u><i>Is none of</i></u>, <u><i>Contains all of</i></u>, etc. are needed in situations where more than one value is ticked.  
 
⚠️ There is no option in HubSpot to create a branching structure whereby every branch is evaluated. Therefore, a nested chain of branches is required to resolve actions based on each individual ticked property.  

#### Example