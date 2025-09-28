## Workflow trigger properties

#### *Zapier trigger*, *Zapier trigger2*
Used to trigger <i>setup, close, data export and survey extension Zaps</i>

> Note: There are two versions of every property value that triggers a Zap. This is because Zaps only trigger if the property actually changes and will also trigger if the property is cleared. To avoid double-calling Zapier in cases where the same call might be made more than once, the workflows toggle between alternate versions of the properties (e.g. <u>Extend1</u> / <u>Extend2</u>) rather than clearing the property before/after use.    

## Combined trigger/flag properties  

#### *HSTrigger*
Used frequently in content, survey extension, ticket/issue/task creation, report task and auxiliary workflows.  
<i>Example values: <u>Update CSS tasks</u>, <u>Update Content Dropdown</u>, <u>Trigger report due date change/task</u></i>

#### *Comms update trigger*
Used only in Comms workflows.  
<i>Example values: <u>Update Comms task</u>, <u>Force Comms advance</u>, <u>Align linked comms stage</u></i>  

## Flag properties

#### *Draft/Preview*  
A ticket with *Content* <u>In progress</u> is ambiguous from a task persepective – it is unclear whether the task should be to <u>implement edits</u> or to <u>send a draft/preview to the customer</u>. This property is used as a flag to indicate to workflows which task is needed.  

## State tracking properties

#### *Content task list*
As a survey ticket's *Content* property may fluctuate between 2-3 different values, any workflow that simply creates a new task based on the current *Content* state will have the effect of 'spamming' the ticket with tasks. To prevent this and maintain ticket tidiness, this property is used as a flag to record which tasks already exist (so that they can be reused when necessary). This could be achieved using branching logic within the content workflows, but this would make the already-dense workflows slower, more complex and harder to maintain.  
<i>Example values: <u>Chase POC</u>, <u>Implement edits</u>, <u>Tag questions</u></i>  

#### *Comms stage*
Used to track which comms are next to go out, as well as determine which comms tasks need to be created or modified when updates occur.  
<i>Example values: <u>Confirm ready for set-up</u>, <u>Survey launch</u>, <u>Ask about close</u></i>  

#### *Chase POC Comms status*
Used to track which chaser comms have been sent to avoid the identical comms being sent out twice. Sending a chaser email advances the property to the next stage. However, as soon as the date reaches the *Content Due Date* for the ticket, the *Chase POC Comms status* is automatically advanced to <u>(content deadline reached)</u> by [workflow]().  
<i>Example values: <u>(2nd nudge)</u>, <u>(past deadline; 2nd chaser)</u></i>  
<small>Note: A blank value for this property indicates the first stage of Chaser comms.</small>  

### See also: [User-controlled property triggers/flags](../articles/User-controlled-property-triggers-flags.md)  