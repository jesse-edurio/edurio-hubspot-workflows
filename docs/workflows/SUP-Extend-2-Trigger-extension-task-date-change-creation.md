**Type:** Ticket workflow  
**Activation:** Internal: <u>Extend[1]</u>  
**Trigger:** *HSTrigger* = <u>Extension task (1 or 2)</u>  
**Key actions:** Triggers task workflow on all associated tasks        

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/SUP-Extend-2-Trigger-extension-task-date-change-creation.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script> 

### Related  
- [SUP/Extend[1]: Trigger workflow to update dates for tasks (and to create reminders if needed)](../workflows/SUP-Extend-1-Trigger-workflow-to-update-dates-for-tasks.md)  
- [SUP/Extend[3]: Update 'unassign issue' task date and create new final reminder](../workflows/SUP-Extend-3-Update-unassign-issue-task-date-and-create-new-final-reminder.md)  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
