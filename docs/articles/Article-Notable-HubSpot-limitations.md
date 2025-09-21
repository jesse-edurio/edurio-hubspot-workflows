### Some notable HubSpot limitations are as follows:

1. The <u>Go to workflow</u> action is limited to workflows of the same type: for example, a task workflow cannot jump to a ticket workflow on its associated ticket or vice versa. As there are restrictions on the actions workflows can make on associated records, any process that involves complex manipulation of both ticket and task properties will likely be <span class="red">impossible in a single workflow</span> and require a 'chain' of workflows of different types.  
<small>Workarounds: [Triggering a workflow of a different type](../articles/Article-How-to-circumvent-HubSpots-limitations.md#use-2-triggering-a-workflow-of-a-different-type)</small>  
2. HubSpot <span class="red">cannot</span> pass parameters, task IDs, etc. between workflows. Getting the workflows to 'talk' to each other is a challenge when building a chain of workflows, as is triggering a workflow on a specific record.    
<small>Workarounds: [Triggering a workflow on a specific associated record](../articles/Article-How-to-circumvent-HubSpots-limitations.md#use-3-triggering-a-workflow-on-a-specific-associated-record)</small>
3. Sophisticated date manipulation is not supported. The options for branching on/filtering dates are often limited and it is <span class="red">impossible</span> for a workflow to set a date relative to a property (e.g. = *survey launch date* + 4 days).  
<small>Workarounds: [Calculated properties (dynamic use)](../articles/Article-How-to-circumvent-HubSpots-limitations.md#calculated-properties-dynamic-use) or Zapier</small>  
4. Inclusion of *properties* as part of text is limited to certain situations. For example, a task title can include a *property* in its title, but cannot be combined with text in branching logic on the title. HubSpot lacks any built-in text manipulation functions.  
<small>Workarounds: [State tracking properties](../articles/Article-How-to-circumvent-HubSpots-limitations.md#state-tracking-properties)</small>  

### See further: [How to circumvent HubSpot's limitations](../articles/Article-How-to-circumvent-HubSpots-limitations.md)