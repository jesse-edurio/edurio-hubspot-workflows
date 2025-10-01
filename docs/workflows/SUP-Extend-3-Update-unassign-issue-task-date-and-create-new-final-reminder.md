**Type:** Task workflow  
**Activation:** Internal: <u>Extend[2]</u>  
**Trigger:** *Priority* = <u>Low</u>  
**Enrolment conditions:** *HSTrigger* = <u>Extension task (1 or 2)</u>  
**Key actions:** Set Support task due date + create final reminder  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2274305232/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/SUP-Extend-3-Update-unassign-issue-task-date-and-create-new-final-reminder.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script> 

### Key steps  
- Sets the *Due date* of <u>Unassign close task</u> and uncompletes it.  
- If a final reminder is needed, creates task and triggers <u>Extend[5]</u> ticket workflow using *HSTrigger*.  

### Notes  
<i>The <u>Final reminder</u> task will automatically trigger the <u>Extend[4]</u> workflow because it is created with *Priority* set to <u>Medium</u>.</i>  

### Related  
- [SUP/Extend[2]: Trigger extension task date change/creation](../workflows/SUP-Extend-2-Trigger-extension-task-date-change-creation.md)  
- [SUP/Extend[4]: Set date for new final reminder task and assign to Support](../workflows/SUP-Extend-4-Set-date-for-new-final-reminder-task-and-assign-to-Support.md)  
- [SUP/Extend[5]: Create task to send reminder with extension template (only if needed)](../workflows/SUP-Extend-5-Create-task-to-send-reminder-with-extension-template.md)  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
