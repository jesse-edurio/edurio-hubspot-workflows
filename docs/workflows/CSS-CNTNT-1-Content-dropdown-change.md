<details><summary>Overview</summary>
<p>The CSS tasks reflect the state of the <em>Content</em> dropdown (and also <em>Dataset</em>). Different tasks are created as this state changes. However, as <em>Content</em> can move back and forward between states, rather than create a new task whenever the state changes, the content workflows reuse existing (completed) tasks, so that there is at most one of each type of task in the ticket.</p><p>After this workflow has actioned the <em>Content</em> change at a ticket level, it is necessary to trigger a task workflow (<u>Content[2]</u>) on each associated task to activate/deactive it as necessary and, in the case of <u>Chase POC</u>, to change its title and email text. <em>HSTrigger</em> and <em>Priority</em> change are used to achieve this.</p></details>

**Type:** Ticket workflow  
**Activation:** User action  
**Trigger:** *Content* dropdown change   
**Key actions:** Creates new CSS tasks if needed + Triggers <u>Update CSS tasks</u>  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2290283761/edit">Link</a>  
   
<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-CNTNT-1-Content-dropdown-change.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key points  
- Only creates a new task if one doesn't already exist. Appends new tasks to *Content task list*.    
- Sets *Draft/Preview* state depending on whether <u>Send draft/preview</u> task is incomplete/present.  
- *HSTrigger* change + task priority update.

### Notes  
<i>Varies task sequence slightly according to *CSS* property.</i>  

### Related  
- [CSS/CNTNT[2]: Update CSS tasks based on content dropdown/task completion changes](../workflows/CSS-CNTNT-2-Update-CSS-tasks.md)
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
- [Draft/Preview property](../articles/Workflow-internal-properties.md#draftpreview)
- [Content task list property](../articles/Workflow-internal-properties.md#content-task-list)