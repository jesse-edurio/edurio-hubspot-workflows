<details><summary>Overview</summary>
<p>CSS have a text-adaptive <u>Chase POC</u> task reflecting the current state of the <em>Dataset</em> and <em>Content</em> properties. Depending on the <em>Content</em> property, there may also be an additional content-specific task. The <u>Chase POC</u> also has a Comms function: it can be used to send chaser emails.</p><p>This workflow is triggered on each of the ticket's tasks following a change in dropdown state. In most cases, the workflow activates/deactivates the task depending on whether it is currently needed. However, as completing certain tasks can trigger a dropdown change, it is also sometimes necessary for this workflow to create an additional task if it doesn't already exist.</p><p>For <u>Chase POC</u>, the workflow ends by triggering <u>COMMS[3]/SPEC/CNTNT/TXT</u>, which will set the task <em>Notes</em> as the email text and finalise the task title.</p></details>

**Type:** Task workflow  
**Activation:** Internal: <u>Content[0]</u>, <u>Content[1]</u>   
**Triggers:** *Priority* change  
**Enrolment conditions:** *HSTrigger* = <u>Update CSS tasks</u>  
**Key actions:** Sets CSS tasks based on ticket state; for <u>Chase POC</u>, also passes to comms workflow for email text update  

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-CNTNT-2-Update-CSS-tasks.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Disables explicit <u>Draft/Preview</u> task by setting property flag to <u>No</u> in cases where this task is not part of the task sequence for the assigned *CSS*.  
2. Sets task *Status* depending on whether information is currently needed from the customer. Triggers [COMMS[3]/SPEC/CNTNT/TXT]() to set final <u>Chase POC: ...</u> title and *Notes*.  
3. Sets *Draft/Preview* state depending on whether <u>Send draft/preview</u> task is incomplete/present.  
4. Renames tasks if needed and updates *Content task list*.  

### Notes  
<i>The exact task sequence varies slightly according to the *CSS* property (e.g. whether a <u>Send draft/preview</u> task is generated or considered implicitly completed when the ticket moves into <u>In review</u>).<br>Tickets that are <u>In process</u> do not require customer chasing for content.</i>  

### Related  
- [CSS/CNTNT[0]: Admin dropdown change → chase task update](../workflows/CSS-CNTNT-0-Admin-dropdown-change.md)
- [CSS/CNTNT[0]: Dataset dropdown change → chase task update](../workflows/CSS-CNTNT-0-Dataset-dropdown-change.md)  
- [CSS/CNTNT[1]: Content dropdown change → update tasks](../workflows/CSS-CNTNT-1-Content-dropdown-change.md)
- [Draft/Preview property](../articles/Workflow-internal-properties.md#draftpreview)
- [Content task list property](../articles/Workflow-internal-properties.md#content-task-list)