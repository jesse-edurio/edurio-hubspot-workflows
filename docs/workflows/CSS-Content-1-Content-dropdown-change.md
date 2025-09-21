**Type:** Ticket workflow  
**Activation:** User action  
**Triggers:** *Content* dropdown change   
**Key actions:** Creates new CSS tasks if needed + Triggers <u>Update CSS tasks</u>  

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-Content-1-Content-dropdown-change.png";
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
- [CSS/Content[2]: Update CSS tasks based on content dropdown/task completion changes](../workflows/CSS-Content-2-Update-CSS-tasks.md)
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
- [Draft/Preview property](../articles/Workflow-internal-properties.md#draftpreview)
- [Content task list property](../articles/Workflow-internal-properties.md#content-task-list)