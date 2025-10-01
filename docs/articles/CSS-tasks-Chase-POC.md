### Overview

<u>Chase POC</u> is a text-adaptive task that also functions as a Comms trigger. Completing the task will send an appropriate chaser email to the POC(s), assuming one is available. Due to the specific nature of the emails, this task has its own custom Comms workflows and is a key part of the CNTNT workflows.  

<small>Created by:

- [CSS3/CSM3/PIPE: ⇒Active implementation]()  
- [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)  
- [CSS3/Setup/CNTNT/PIPE/TSK: Task sequences](../workflows/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.md)  

</small> 

### Variants

The base text contains <i>Content</i>, <i>Dataset</i> or both (e.g. <u>Chase POC: Content, Dataset</u>).  
<small>Note: <i>Admins</i> was removed from the task after the introduction of <i>User management</i>.</small>  

Suffixes:  
- <u>(2nd nudge)</u>  
- <u>(content deadline reached)</u>  
- <u>(past deadline; 2nd chaser)</u>  
- <u>(no more auto-comms)</u>  

### Dependencies

*Dataset*, *Content*, *Draft/Preview*, *Chase POC Comms status*  

### Behaviour  

*Dataset* = <u>Not received</u> or <u>Incomplete</u> → Chase POC: Dataset  
*Content* = <u>Not received</u> or <u>In review</u> → Chase POC: Content  

- <u>Implement edits</u>  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)</small>  
- <u>Send draft/preview</u> *  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md) or [CSS/CNTNT[2]](../workflows/CSS-CNTNT-2-Update-CSS-tasks.md) or [CSS3/Setup/CNTNT/PIPE/TSK: Task sequences](../workflows/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.md)</small>  
- <u>Get content approved</u> *  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)</small>   
- <u>Tag questions</u> *  
<small>Created by: [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)</small>   

