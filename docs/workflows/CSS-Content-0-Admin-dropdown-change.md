**Type:** Ticket workflow  
**Activation:** User action  
**Triggers:** *Admins* dropdown change  
**Key actions:** Triggers <u>Update CSS tasks</u>  

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-Content-0-Admin-dropdown-change.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
- *HSTrigger* change + task priority update.

### Related  
- [CSS/Content[2]: Update CSS tasks based on content dropdown/task completion changes](../workflows/CSS-Content-2-Update-CSS-tasks.md)
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)