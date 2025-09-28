> Note:  
> Several tasks can be created in more than one workflow. This is because it is possible for a ticket to jump pipeline stages (e.g. <u>Ready for OB/KO</u> ⇒ <u>Active implementation</u>) and because both <em>dropdown property</em> changes and task completion can trigger new tasks. As the workflows check whether a task already exists before creating one, tasks should never be duplicated.  

### OB/KO

- <u>Send kick-off follow-up email</u>  
<small>Created by: [CSS/PIPE: ⇒OB/KO Scheduled]() or [CSS3/CSM3/PIPE: ⇒Active implementation]()</small>  

### Active survey implementation

- <u>Set contacts for automated emails</u>  
<u>Chase POC</u>  
<small>Created by: [CSS3/CSM3/PIPE: ⇒Active implementation]() or [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md) or [CSS3/Setup/CNTNT/PIPE/TSK: Task sequences](../workflows/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.md)</small>  
- <u>Implement edits</u>  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)</small>  
- <u>Send draft/preview</u> *  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md) or [CSS/CNTNT[2]](../workflows/CSS-CNTNT-2-Update-CSS-tasks.md) or [CSS3/Setup/CNTNT/PIPE/TSK: Task sequences](../workflows/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.md)</small>  
- <u>Get content approved</u> *  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)</small>   
- <u>Tag questions</u> *  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)</small>   

### Setup

- <u>Missing info: Template ID</u> *   
- <u>Missing info: Check links</u> *   
- <u>Put milestone in set-up issue</u> *  
<u>Populate and unassign set-up issue</u>   
<u>Check dates for Support's tasks</u>  

<small>All created by: [CSS/PIPE/Setup[0]](../workflows/CSS-PIPE-Setup-0-Setup--Create-CSS-tasks-GL-issue.md)</small>  

### Close

- <u>Populate close issue</u>  
<small>Created by: [CSS/PIPE/Close[0]](../workflows/CSS-PIPE-Close-0-Live--Create-task-GL-issue.md)</small>

<br>
#### * Some tasks are *CSS*-specific. 