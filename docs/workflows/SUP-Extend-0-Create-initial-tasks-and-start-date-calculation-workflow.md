**Type:** Ticket workflow  
**Activation/Triggers:** *Survey Close Extension Needed* changed  
**Key actions:** Creates extension tasks + triggers Zapier  

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/SUP-Extend-0-Create-initial-tasks-and-start-date-calculation-workflow.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Checks ticket is a survey ticket with <u>Live</u> or <u>Close</u> status.   
2. Triggers Zapier. 
3. Copies extension date to associated tickets (i.e. report).  
4. Only creates Support's tasks if they do not already exist or are already completed.  
5. Creates a different task (the instructions vary) depending on *Distribution method* and *Report*.  

### Notes  
<i>The instruction variants take into account whether there is a report whose date needs updating and whether reminders need to be sent and/or updated.</i>  

### Related  
- [Zapier trigger2 property](../articles/Workflow-internal-properties.md#zapier-trigger-zapier-trigger2)  
