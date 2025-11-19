1. The <u>Go to workflow</u> action is limited to workflows of the same type: for example, a task workflow cannot jump to a ticket workflow on its associated ticket or vice versa. As there are restrictions on the actions workflows can make on associated records, any process that involves complex manipulation of both ticket and task properties will likely be impossible in a single workflow and require a 'chain' of workflows of different types.  
<small>Workarounds: [Triggering a workflow of a different type](../articles/Article-Techniques-used-in-CS-workflows.md#use-2-triggering-a-workflow-of-a-different-type)</small>  
2. HubSpot cannot pass parameters, task IDs, etc. between workflows. Getting the workflows to 'talk' to each other is a challenge when building a chain of workflows, as is triggering a workflow on a specific record.    
<small>Workarounds: [Triggering a workflow on a specific associated record](../articles/Article-Techniques-used-in-CS-workflows.md#use-3-triggering-a-workflow-on-a-specific-associated-record)</small>
3. Sophisticated date manipulation is not supported; it is impossible for a workflow to set a date relative to a property (e.g. = *survey launch date* + 4 days).  
<small>Workarounds: [Calculated properties (dynamic use)](../articles/Article-Techniques-used-in-CS-workflows.md#calculated-properties-dynamic-use) or Zapier</small>  
4. Date comparison is not possible between objects (e.g. branching logic cannot compare a date in a deal with a date in its associated company).  
<small>Workarounds: Can be resolved using a temporary cloned field</small>  
<small>Example: [COMMS/LNK/ALIGN: Date change in ticket]()</small>  
5. Whether HubSpot can compare two properties in a branching action depends on the type of property: HubSpot can compare dates within the same record, but not dropdowns or text fields (i.e. HubSpot can test whether *text-field* = <u>hello</u>, but not if *text-field-1* = *text-field-2*).   
<small>Workarounds: None</small>  
6. Inclusion of *properties* as part of text is limited to certain situations. For example, a task title can include a *property* in its title, but cannot be combined with text in branching logic on the title. HubSpot lacks any built-in text manipulation functions.  
<small>Workarounds: [State tracking properties](../articles/Article-Techniques-used-in-CS-workflows.md#state-tracking-properties) or Zapier</small>    
7. HubSpot branching logic allows only one branch to run: the first that satisfies its criteria. Unlike Zapier, HubSpot lacks the ability to allow multiple branches to run in parallel, which may mean that *multiple-dropdown properties* require a 'staircase' of branching actions to parse fully.  
<small>Workarounds: ['Staircase' branching actions]()</small>  
8. Workflows can only perform <u>replace</u> or <u>append</u> actions on *multiple-dropdown properties*; there is no <u>remove</u> option. Removing one option from a list will necessitate rebuilding the list using multiple branches – impractical unless the range of options is very small.  
<small>Workarounds: None</small>  
<small>Example: [CSS/CNTNT[2]](../workflows/CSS-CNTNT-2-Update-CSS-tasks.md) rebuilds a list (see step 4)   


### See further: [Techniques used in CS workflows](../articles/Article-Techniques-used-in-CS-workflows.md)