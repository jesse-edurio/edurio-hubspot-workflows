> Foreword:  
> The following are not meant to be regarded as best practice. Some of the techniques detailed here are essentially workarounds, used in CS workflows to achieve results that are not possible through direct means (because HubSpot doesn't natively support them).  
  
#### Examples of actions that require 'non-standard' techniques:

- a property change in one ticket creating a task and/or changing a property in a different ticket   
- creating a task with a due date set to ticket property (only a task workflow can set a task's due date to a property – but cannot do this on a task it creates)  
- dynamically changing the text of a task to reflect the state of one or more ticket properties  
- linking changeable properties between certain associated tickets, e.g. so that a change on one ticket will change the equivalent property on another ticket (but not all associated tickets)  
- tracking the cumulative time a property spends in one or more defined states (HubSpot tracks cumulative time only for pipeline stages, not properties)   

## Calculated properties (dynamic use)

➖ Cannot read <u>today</u> or <u>now</u> as a value  
➖ Cannot be <i>set</i> dynamically by workflows  
➕ Can include conditional logic based on property values that <b><i>can</i></b> be changed dynamically in a workflow  

#### Example of dynamic use with conditional logic: [Cumulative time tracking]()  

## Using property triggers/flags

A single property can function as a trigger for multiple workflows and/or as a flag value for enrolment conditions for workflows triggered on multiple associated records.

#### (Example) The same value of *HSTrigger* is used both as a trigger for [Extend[2]](../workflows/SUP-CSM-Extend-2-Trigger-extension-task-date-change-creation.md) and as a flag for [Extend[3]](../workflows/SUP-Extend-3-Update-unassign-issue-task-date-and-create-new-final-reminder.md).  

### Use #1: Zap activation  

As Zapier enrolment is typically based on property change, it is often necessary to use a *trigger property* to activate a Zap. Note that, unlike HubSpot, no filter criteria can be used on Zapier's activation.  

### Use #2: Triggering a workflow of a different type  
> For example, a task workflow needs to trigger a workflow on its associated ticket.  

- The ticket workflow trigger should be the <u>property change</u>.  
- The task triggers this workflow setting the *trigger property* on its associated ticket to the appropriate value.
- The *trigger property* should be cleared either before setting or after enrolment if potential re-enrolment is desired.  

#### (Example) Workflow 'switching': [workflow]()    

### Use #3: Triggering a workflow on a specific associated record  
> For example, a deal workflow needs to perform an action on <i>one</i> of its associated tickets, but not all of them.  

- The workflow sets the *trigger property* on all associated records.  
- All associated records enter the new (or same) workflow and can then be filtered (e.g. by pipeline or property logic) so that only the correct record is acted upon.  

#### (Example) Targeting a specific associated record: [workflow]()

### Use #4: Using trigger + flag combination with <i>tasks</i>
> For example, a ticket workflow needs to set the date of <i>one</i> of its associated tasks, but not all of them.  

Since tasks have no custom properties, the *priority* property is one potential trigger for task workflows, assuming that priorities are not being used for other purposes. However, as other tasks in HubSpot may have *priority* set, an associated *flag property* will be required to target enrolment.  

- The ticket (or company, contact, etc.) workflow should first set a *flag property* that will act as an enrolment condition in the task workflow.
- The workflow can then set task *priority* on all associated tasks.  
- The task workflow should be set up to trigger on *priority* change with the associated *flag property* as an enrolment condition (NOT a trigger).  
- The first action of the task workflow should clear the priority flag. After this, conditional logic can be used to target only the relevant task(s).  

#### (Example) Setting specific task dates:
- [workflow]()  
- [workflow]()  

#### See also: [Enrolment on creation](../articles/Article-Workflow-triggers-and-enrolment.md#enrolment-on-creation)  

⚠️ Do NOT do the equivalent of a 'Select all' on tasks. Use *property flags* as enrolment conditions on any task workflow triggered in this way and ensure conditional logic (e.g. on the task *title*) filters out all but the relevant task(s) before any action is taken.  

## State tracking properties

It is sometimes easier to use a single property (either a multi-dropbox or single-line text) to function almost as a <i>set of variables</i>. This is only usually necesssary under the following circumstances:  

- To avoid cumbersome repeated branching logic on associated properties in workflows that require heavy use of associations (example: [Content task list]() property).  
- To run workflows that require branching logic on records associated with an association, as HubSpot only supports logic based on immediate associations (example: [Linked ready]() property).  

⚠️ This is generally not good practice and should be used sparingly, if ever. Most workflow actions can be achieved through other means.  