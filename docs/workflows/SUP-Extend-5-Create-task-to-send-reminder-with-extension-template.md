**Type:** Ticket workflow  
**Activation:** Internal: <u>Extend[3]</u>  
**Trigger:** *HSTrigger* = <u>Extension task3</u>  
**Key actions:** Creates a new final reminder if needed (+2 days)  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2269685968/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/SUP-Extend-5-Create-task-to-send-reminder-with-extension-template.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script> 

### Key points  
- Check if a reminder task due today has already been completed.  
- Sets new final reminder *Due date* = 2 days ahead.  

### <span class="red">Update required?</span>
<span class="red">The functionality could be improved here; the actions required may vary depending on the point at which the extension is made. <i>Ask about close</i> may or may not needed to be removed, and a very early extension may not need an extension-template reminder. UNDER INVESTIGATION (non-urgent).</span>  

### Related  
- [SUP/Extend[3]: Update 'unassign issue' task date and create new final reminder](../workflows/SUP-Extend-3-Update-unassign-issue-task-date-and-create-new-final-reminder.md)  
- [SUP/Extend[4]: Set date for new final reminder task and assign to Support](../workflows/SUP-Extend-4-Set-date-for-new-final-reminder-task-and-assign-to-Support.md)  
- [HSTrigger property](../articles/Workflow-internal-properties.md#hstrigger)
