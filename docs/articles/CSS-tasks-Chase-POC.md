### Overview

<u>Chase POC</u> is a text-adaptive task that also functions as a Comms trigger. Completing the task will send an appropriate chaser email to the POC(s), assuming one is available. Due to the specific nature of the emails, this task has its own custom Comms workflow and state tracking property (*Chase POC Comms status*).  

<small>Created by:

- [CSS3/CSM3/PIPE: ⇒Active implementation]()  
- [CSS/CNTNT[1]](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)  
- [CSS3/Setup/CNTNT/PIPE/TSK: Task sequences](../workflows/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.md)  

Text/Notes set by: [COMMS[3]/SPEC/CNTNT/TXT: Set email text and title text for Chase POC task]()  

Action: [CSS3/Setup/CNTNT/PIPE/TSK: Task sequences](../workflows/CSS3-Setup-CNTNT-PIPE-TSK-Task-sequences.md) → [COMMS[5]/MAIN/EML: Trigger email send]()

</small> 

### Variants

The base text contains <i>Content</i>, <i>Dataset</i> or both (e.g. <u>Chase POC: Content, Dataset</u>).  
<small>Note: <i>Admins</i> was removed from the task after the introduction of <i>User management</i>.</small>  

Suffixes (taken from *Chase POC Comms status* value):  
- <i>blank</i>  
- <u>(2nd nudge)</u>  
- <u>(content deadline reached)</u>  
- <u>(past deadline; 2nd chaser)</u>  
- <u>(no more auto-comms)</u>  

### Property dependencies

*Dataset*, *Content*, *Draft/Preview*, *Chase POC Comms status*  

### Behaviour  

- *Dataset* = <u>Not received</u> or <u>Incomplete</u> → Chase POC: Dataset  
- *Content* = <u>Not received</u> or <u>In review</u> → Chase POC: Content  
- If *Draft/Preview* = <u>Need to send</u>, Chase POC: Content is not generated.  
- Advances one stage in *Chase POC Comms status* whenever <u>Chase POC</u> is completed.  
Automatically advances to 3rd stage once content due date is reached.  

### <small>See further: [CSS task sequence](../articles/CSS-task-sequence.md)</small>  

   

