**Type:** Ticket workflow  
**Activation:** Internal: <u>Extend[3]</u>  
**Triggers:** *HSTrigger* = <u>Extension task3</u>  
**Key actions:** Creates a new final reminder if needed (+2 days)    

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/SUP-Extend-5-Create-task-to-send-reminder-with-extension-template.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script> 

### Key steps  
- Check if a reminder task due today has already been completed.  
- Sets new final reminder *Due date* = 2 days ahead.  

### <span class="red">Possible bug</span>
<span class="red">Shouldn't it check only if R3 (or final) has been sent today, not any reminder? What if R2 was sent today?</span>  

### Related  
- [SUP/Extend[3]: Update 'unassign issue' task date and create new final reminder](../workflows/SUP-Extend-3-Update-unassign-issue-task-date-and-create-new-final-reminder.md)  
- [SUP/Extend[4]: Set date for new final reminder task and assign to Support](../workflows/SUP-Extend-4-Set-date-for-new-final-reminder-task-and-assign-to-Support.md)  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
