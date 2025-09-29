**Type:** Task workflow  
**Activation:** Internal: Task creation (<u>Extend[3]</u>)  
**Trigger:** *Title* = <u>Final reminder</u> + *Priority* = <u>Medium</u>  
**Key actions:** Sets task due date and assigns to Support       

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/SUP-Extend-4-Set-date-for-new-final-reminder-task-and-assign-to-Support.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script> 

### Related  
- [SUP/Extend[3]: Update 'unassign issue' task date and create new final reminder](../workflows/SUP-Extend-3-Update-unassign-issue-task-date-and-create-new-final-reminder.md)   
- [SUP/Extend[5]: Create task to send reminder with extension template (only if needed)](../workflows/SUP-Extend-5-Create-task-to-send-reminder-with-extension-template.md) 
