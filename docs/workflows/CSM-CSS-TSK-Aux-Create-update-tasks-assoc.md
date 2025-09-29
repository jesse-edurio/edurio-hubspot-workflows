<details><summary>Overview</summary>
<p></p></details>

**Type:** Ticket workflow  
**Activation:** Internal  
**Trigger:** *HSTrigger* changed  
**Key actions:** Creates or updates tasks        

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSM-CSS-TSK-Aux-Create-update-tasks-assoc.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Creates action/warning tasks after ticket creation.
2. *HSTrigger* change + task priority update. 
3. Handles alignment of report's due date based on change in implementation ticket. 

### Notes  
<i><u>Trigger update CSS tasks</u> is necessary because a task workflow cannot trigger actions on other tasks associated to the same ticket. It is necessary to switch to a ticket workflow to achieve this.</i>  

### Related  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
